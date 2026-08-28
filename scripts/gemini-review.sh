#!/usr/bin/env bash
# Ask Gemini (strongest Pro model) for an editorial review.
# Reads the API key from the local Claude MCP config; never prints it.
#
# Usage: scripts/gemini-review.sh <system-instruction-file> <prompt-file>
# Prints the model's text reply to stdout; the resolved model goes to stderr.
#
# Model selection (added 2026-08-28, founder's direction): unless GEMINI_MODEL
# is set, the script asks the API which models exist and picks the strongest
# Pro model — highest version number wins; at equal versions a stable release
# beats a -preview build. A hardcoded default goes stale silently; this does
# not. If the listing call fails, the previous known-good model is the
# fallback so a network blip never blocks a review.
#
# Honesty preamble (same direction): every review, whatever the per-task
# system prompt says, also carries a standing instruction to think critically,
# be honest, quote only text that exists, and prefer "clean" over invented
# findings. Added after a 2026-08-28 review hallucinated quotes that appeared
# nowhere in the input (recorded in HANDOFF).
set -euo pipefail

SYS_FILE="$1"
PROMPT_FILE="$2"
FALLBACK_MODEL="gemini-3.1-pro-preview"

KEY=$(node -e "console.log(require(process.env.HOME+'/.claude.json').mcpServers['gemini-chat-mcp'].env.GEMINI_API_KEY)")

if [ -n "${GEMINI_MODEL:-}" ]; then
  MODEL="$GEMINI_MODEL"
else
  MODEL=$(curl -s --max-time 30 "https://generativelanguage.googleapis.com/v1beta/models?pageSize=1000&key=${KEY}" | node -e '
let d = ""; process.stdin.on("data", (c) => (d += c)).on("end", () => {
  let best = null;
  try {
    const models = JSON.parse(d).models || [];
    for (const m of models) {
      const name = (m.name || "").replace(/^models\//, "");
      // Only generation-capable Pro models; skip dated snapshots, tts/embedding/etc.
      if (!/^gemini-[0-9.]+-pro(-preview)?$/.test(name)) continue;
      if (!(m.supportedGenerationMethods || []).includes("generateContent")) continue;
      const version = parseFloat(name.match(/gemini-([0-9.]+)-pro/)[1]);
      const stable = name.endsWith("-preview") ? 0 : 1;
      if (!best || version > best.version || (version === best.version && stable > best.stable))
        best = { name, version, stable };
    }
  } catch (e) {}
  process.stdout.write(best ? best.name : "");
})')
  if [ -z "$MODEL" ]; then
    MODEL="$FALLBACK_MODEL"
    echo "[model list unavailable — falling back to ${MODEL}]" >&2
  fi
fi
echo "[resolved model: ${MODEL}]" >&2

HONESTY='STANDING REVIEW DISCIPLINE (applies on top of everything below):
Think critically and be honest. You are a reviewer, not a collaborator eager
to please: a review that finds nothing wrong is a perfectly good review, and
"clean" is the correct output when the text holds up — never invent or pad
findings to seem useful. Every phrase you quote MUST appear verbatim in the
document you were given; before reporting a finding, re-check that the quoted
text is actually present, and discard the finding if it is not. Do not review
imagined or remembered content. Mark real uncertainty as uncertainty rather
than asserting it, and say plainly when a judgment is subjective taste rather
than an error. A fabricated quote or invented finding makes the entire review
unusable.'

BODY=$(HONESTY="$HONESTY" node -e "
const fs = require('fs');
process.stdout.write(JSON.stringify({
  system_instruction: { parts: [{ text: process.env.HONESTY + '\n\n---\n\n' + fs.readFileSync(process.argv[1], 'utf8') }] },
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
