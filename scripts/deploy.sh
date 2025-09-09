#!/usr/bin/env bash
# scripts/deploy.sh - Vercel CI/CD simplified (no OIDC)
set -euo pipefail

# -----------------------------
# Path setup
# -----------------------------
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ENV_FILE="$ROOT_DIR/.env.production"

# -----------------------------
# Load .env.production
# -----------------------------
if [[ -f "$ENV_FILE" ]]; then
  echo "🔑 Loading environment from $ENV_FILE"
  export $(grep -v '^#' "$ENV_FILE" | xargs)
else
  echo "❌ Missing $ENV_FILE"
  exit 1
fi

# -----------------------------
# Validate Vercel token
# -----------------------------
: "${VERCEL_TOKEN:?VERCEL_TOKEN not set}"
: "${VERCEL_PROJECT_ID:?VERCEL_PROJECT_ID not set}"

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
DEPLOY_TARGET="preview"
[[ "$BRANCH" == "main" ]] && DEPLOY_TARGET="production"
echo "🌿 Deploying branch '$BRANCH' → $DEPLOY_TARGET"

# -----------------------------
# Deploy to Vercel
# -----------------------------
DEPLOY_CMD="npx vercel --yes --token $VERCEL_TOKEN"
[[ "$DEPLOY_TARGET" == "production" ]] && DEPLOY_CMD+=" --prod" || DEPLOY_CMD+=" --prebuilt"

echo "🚀 Running deployment..."
DEPLOY_URL=$($DEPLOY_CMD)

echo "✅ Deployment finished"
echo "🔗 $DEPLOY_URL"

echo "🎉 Deploy script completed."