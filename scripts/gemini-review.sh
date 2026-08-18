#!/usr/bin/env bash
# Ask Gemini (strongest Pro model) for an editorial review.
# Reads the API key from the local Claude MCP config; never prints it.
#
# Usage: scripts/gemini-review.sh <system-instruction-file> <prompt-file>
# Prints the model's text reply to stdout.
set -euo pipefail

MODEL="${GEMINI_MODEL:-gemini-3.1-pro-preview}"
SYS_FILE="$1"
PROMPT_FILE="$2"

KEY=$(node -e "console.log(require(process.env.HOME+'/.claude.json').mcpServers['gemini-chat-mcp'].env.GEMINI_API_KEY)")

BODY=$(node -e "
const fs = require('fs');
process.stdout.write(JSON.stringify({
  system_instruction: { parts: [{ text: fs.readFileSync(process.argv[1], 'utf8') }] },
  contents: [{ parts: [{ text: fs.readFileSync(process.argv[2], 'utf8') }] }],
  generationConfig: { temperature: 0.4 }
}));" "$SYS_FILE" "$PROMPT_FILE")

curl -s --max-time 300 -X POST \
  "https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${KEY}" \
  -H "Content-Type: application/json" \
  -d "$BODY" | node -e "
let d=''; process.stdin.on('data', c => d += c).on('end', () => {
  const r = JSON.parse(d);
  if (r.error) { console.error('GEMINI ERROR:', r.error.message); process.exit(1); }
  const parts = (r.candidates?.[0]?.content?.parts || []).filter(p => p.text && !p.thought);
  console.log(parts.map(p => p.text).join('\n'));
  console.error('[model: ' + r.modelVersion + ']');
});"
