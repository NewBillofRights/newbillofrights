#!/usr/bin/env bash
# Deploy the site to Firebase Hosting with a full persistent log.
#
# Usage:
#   scripts/deploy.sh preview [channel-name]   # deploy to a preview channel (default: "preview")
#   scripts/deploy.sh prod                     # deploy to production hosting
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
LOG_DIR="/tmp/newbillofrights-deploys"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/deploy-$(date +%Y%m%d-%H%M%S).log"

TARGET="${1:-preview}"
CHANNEL="${2:-preview}"

{
  echo "=== newbillofrights deploy ==="
  echo "target: $TARGET  channel: $CHANNEL"
  echo "date: $(date)"
  echo "git: $(git -C "$REPO_ROOT" rev-parse --short HEAD 2>/dev/null || echo 'no commit')"
  echo "=============================="

  echo "--- build ---"
  (cd "$REPO_ROOT/site" && npm run build)

  echo "--- deploy ---"
  case "$TARGET" in
    prod)
      (cd "$REPO_ROOT" && firebase deploy --only hosting)
      ;;
    preview)
      (cd "$REPO_ROOT" && firebase hosting:channel:deploy "$CHANNEL" --expires 30d)
      ;;
    *)
      echo "unknown target: $TARGET (use 'preview' or 'prod')" >&2
      exit 1
      ;;
  esac
} 2>&1 | tee "$LOG_FILE"

echo "full log: $LOG_FILE"
