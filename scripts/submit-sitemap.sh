#!/usr/bin/env bash
# Resubmit the sitemap to Google Search Console after a production deploy.
#
# Why this exists: Google retired the /ping?sitemap= endpoint in 2023, and the
# Search Console UI has no automation. The Search Console API does, but it
# needs a Google identity that owns the property. We use a dedicated service
# account (search-console@newbillofrights-prod) that verified the URL-prefix
# property https://newbillofrights.net/ via a meta tag in Base.astro. The
# founder's gcloud login impersonates it — no key file on disk, and the same
# ~/.claude/tools/reauth.sh that keeps deploys working keeps this working.
#
# Called by scripts/deploy.sh after a prod deploy; safe to run by hand.
# Non-fatal by design: a failure here must never mark a successful deploy as failed.
set -uo pipefail

GCLOUD="${GCLOUD:-/opt/homebrew/share/google-cloud-sdk/bin/gcloud}"
SA="search-console@newbillofrights-prod.iam.gserviceaccount.com"
SITE="https://newbillofrights.net/"
SITEMAP="https://newbillofrights.net/sitemap-index.xml"

enc() { python3 -c 'import sys,urllib.parse;print(urllib.parse.quote(sys.argv[1],safe=""))' "$1"; }

echo "--- sitemap resubmit ---"
TOKEN="$("$GCLOUD" auth print-access-token \
  --impersonate-service-account="$SA" \
  --scopes=https://www.googleapis.com/auth/webmasters 2>/dev/null)"
if [ -z "$TOKEN" ]; then
  echo "sitemap: could not mint an impersonated token for $SA (gcloud login stale? run ~/.claude/tools/reauth.sh)" >&2
  exit 0
fi

# Idempotent: make sure the verified property is on the service account's
# Search Console site list (ownership via Site Verification alone is not enough).
curl -s -o /dev/null -X PUT -H "Authorization: Bearer $TOKEN" -H "Content-Length: 0" \
  "https://www.googleapis.com/webmasters/v3/sites/$(enc "$SITE")"

URL="https://www.googleapis.com/webmasters/v3/sites/$(enc "$SITE")/sitemaps/$(enc "$SITEMAP")"
CODE="$(curl -s -o /tmp/sitemap-submit-response.txt -w '%{http_code}' -X PUT -H "Authorization: Bearer $TOKEN" -H "Content-Length: 0" "$URL")"

if [ "$CODE" = "204" ] || [ "$CODE" = "200" ]; then
  echo "sitemap: resubmitted $SITEMAP for $SITE (HTTP $CODE)"
  # Show what Google now has on file for it.
  curl -s -H "Authorization: Bearer $TOKEN" "$URL" \
    | python3 -c 'import sys,json; d=json.load(sys.stdin); print("sitemap: lastSubmitted", d.get("lastSubmitted"), "| lastDownloaded", d.get("lastDownloaded"), "| pending", d.get("isPending"), "| errors", d.get("errors"), "| warnings", d.get("warnings"))' 2>/dev/null || true
else
  echo "sitemap: submit failed (HTTP $CODE): $(head -c 400 /tmp/sitemap-submit-response.txt)" >&2
fi
exit 0
