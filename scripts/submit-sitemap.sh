#!/usr/bin/env bash
# Resubmit the sitemap to Google Search Console after a production deploy.
#
# Least-privilege design (founder's direction 2026-09-06 after Google's
# "new owner" email): the service account search-console@newbillofrights-prod
# holds NO ownership of any Search Console property. It can only submit a
# sitemap if Michael has added it as a *Full user* (not owner) of the
# newbillofrights.net domain property in Search Console → Settings → Users and
# permissions. Until then this script prints one line and exits 0 — the
# sitemap is still discovered through the Sitemap: line in site/public/robots.txt,
# which needs no credentials at all.
#
# Google retired /ping?sitemap= in 2023; the Search Console API is the only
# programmatic submit. The founder's gcloud login impersonates the service
# account (no key file); the same ~/.claude/tools/reauth.sh keeps both working.
#
# Called by scripts/deploy.sh after a prod deploy; safe to run by hand.
# Never fails the deploy.
set -uo pipefail

GCLOUD="${GCLOUD:-/opt/homebrew/share/google-cloud-sdk/bin/gcloud}"
SA="search-console@newbillofrights-prod.iam.gserviceaccount.com"
# Domain property (what Michael owns). A Full user added there can submit.
SITE="sc-domain:newbillofrights.net"
SITEMAP="https://newbillofrights.net/sitemap-index.xml"

enc() { python3 -c 'import sys,urllib.parse;print(urllib.parse.quote(sys.argv[1],safe=""))' "$1"; }

echo "--- sitemap resubmit ---"
TOKEN="$("$GCLOUD" auth print-access-token \
  --impersonate-service-account="$SA" \
  --scopes=https://www.googleapis.com/auth/webmasters 2>/dev/null)"
if [ -z "$TOKEN" ]; then
  echo "sitemap: skipped — could not mint a token for $SA (gcloud login stale? ~/.claude/tools/reauth.sh)"
  exit 0
fi

LEVEL="$(curl -s -H "Authorization: Bearer $TOKEN" \
  "https://www.googleapis.com/webmasters/v3/sites/$(enc "$SITE")" \
  | python3 -c 'import sys,json; print(json.load(sys.stdin).get("permissionLevel",""))' 2>/dev/null)"
case "$LEVEL" in
  siteOwner|siteFullUser) ;;
  *)
    echo "sitemap: skipped — $SA has no access to $SITE (level: '${LEVEL:-none}')."
    echo "sitemap: Google still discovers the sitemap via robots.txt. To enable API resubmits,"
    echo "sitemap: add $SA as a FULL USER (not owner) in Search Console → Settings → Users and permissions."
    exit 0
    ;;
esac

URL="https://www.googleapis.com/webmasters/v3/sites/$(enc "$SITE")/sitemaps/$(enc "$SITEMAP")"
RESP="$(mktemp)"
CODE="$(curl -s -o "$RESP" -w '%{http_code}' -X PUT -H "Authorization: Bearer $TOKEN" -H "Content-Length: 0" "$URL")"
if [ "$CODE" = "204" ] || [ "$CODE" = "200" ]; then
  echo "sitemap: resubmitted $SITEMAP for $SITE as $LEVEL (HTTP $CODE)"
  curl -s -H "Authorization: Bearer $TOKEN" "$URL" \
    | python3 -c 'import sys,json; d=json.load(sys.stdin); print("sitemap: lastSubmitted", d.get("lastSubmitted"), "| lastDownloaded", d.get("lastDownloaded"), "| pending", d.get("isPending"), "| errors", d.get("errors"), "| warnings", d.get("warnings"))' 2>/dev/null || true
else
  echo "sitemap: submit failed (HTTP $CODE): $(head -c 300 "$RESP")"
fi
rm -f "$RESP"
exit 0
