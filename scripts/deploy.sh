#!/usr/bin/env bash
# scripts/deploy.sh - Vercel CI/CD script (multi-branch auto)
set -euo pipefail

# -----------------------------
# Paths
# -----------------------------
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ENV_FILE="$ROOT_DIR/.env.production"
VERCEL_PROJECT_FILE="$ROOT_DIR/.vercel/project.json"

# -----------------------------
# Load environment
# -----------------------------
if [[ -f "$ENV_FILE" ]]; then
  echo "🔑 Loading environment from $ENV_FILE"
  export $(grep -v '^#' "$ENV_FILE" | xargs)
else
  echo "❌ Missing $ENV_FILE"
  exit 1
fi

# -----------------------------
# Validate Vercel config
# -----------------------------
: "${VERCEL_PROJECT_ID:?VERCEL_PROJECT_ID not set}"
: "${VERCEL_ORG_ID:?VERCEL_ORG_ID not set}"
: "${VERCEL_TOKEN:?VERCEL_TOKEN not set}"

# -----------------------------
# Auto-load OIDC token (optional)
# -----------------------------
if [[ -z "${VERCEL_OIDC_TOKEN:-}" || "$VERCEL_OIDC_TOKEN" == "<PASTE_YOUR_OIDC_JWT_HERE>" ]]; then
  if [[ -f "$VERCEL_PROJECT_FILE" ]]; then
    export VERCEL_OIDC_TOKEN=$(jq -r '.token // empty' "$VERCEL_PROJECT_FILE" 2>/dev/null || echo "")
    [[ -n "$VERCEL_OIDC_TOKEN" ]] && echo "🔐 OIDC token auto-loaded" || echo "⚠️ No OIDC token found, skipping"
  fi
fi

# -----------------------------
# Install deps & build
# -----------------------------
echo "📦 Installing dependencies..."
pnpm install

echo "🔨 Building project..."
pnpm run build

# -----------------------------
# Determine deploy target
# -----------------------------
BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [[ "$BRANCH" == "main" ]]; then
  DEPLOY_TARGET="production"
else
  DEPLOY_TARGET="preview"
fi
echo "🌿 Deploying branch '$BRANCH' → $DEPLOY_TARGET"

# -----------------------------
# Deploy function
# -----------------------------
deploy_now() {
  DEPLOY_CMD="npx vercel --yes --token $VERCEL_TOKEN"
  [[ "$DEPLOY_TARGET" == "production" ]] && DEPLOY_CMD+=" --prod" || DEPLOY_CMD+=" --prebuilt"
  $DEPLOY_CMD
}

echo "🚀 Running deployment..."
set +e
DEPLOY_URL=$(deploy_now 2>&1)
STATUS=$?
set -e

# Retry login if token invalid
if [[ $STATUS -ne 0 && "$DEPLOY_URL" == *"not valid"* ]]; then
  echo "⚠️ VERCEL_TOKEN invalid, trying login..."
  npx vercel login
  echo "🔁 Retrying deploy..."
  DEPLOY_URL=$(deploy_now)
fi

echo "✅ Deployment finished"
echo "🔗 $DEPLOY_URL"

# -----------------------------
# Optional: fetch server-side info
# -----------------------------
if [[ -n "${VERCEL_OIDC_TOKEN:-}" ]]; then
  echo "🔐 Fetching Vercel project info..."
  curl -s -H "Authorization: Bearer $VERCEL_OIDC_TOKEN" \
    "https://api.vercel.com/v1/projects/$VERCEL_PROJECT_ID/env" | jq .
fi

echo "🎉 Deploy script completed."