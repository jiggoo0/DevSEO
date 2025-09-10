#!/usr/bin/env bash
# scripts/deploy.sh - Vercel CI/CD (force production deploy, log URL)
set -euo pipefail

# -----------------------------
# Path setup
# -----------------------------
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ENV_FILE="$ROOT_DIR/.env.production"
DEPLOY_LOG="$ROOT_DIR/DEPLOY_URL.txt"

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
# Ensure on main branch
# -----------------------------
BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [[ "$BRANCH" != "main" ]]; then
  echo "❌ You must be on branch 'main' to deploy production."
  exit 1
fi

# -----------------------------
# Force production deploy
# -----------------------------
echo "🌿 Deploying branch '$BRANCH' → production (force rebuild)"
DEPLOY_CMD="npx vercel --yes --token $VERCEL_TOKEN --prod --force"

echo "🚀 Running deployment..."
DEPLOY_URL=$($DEPLOY_CMD)

# -----------------------------
# Log deploy URL
# -----------------------------
echo "$DEPLOY_URL" | tee "$DEPLOY_LOG"

echo "✅ Deployment finished"
echo "🔗 $DEPLOY_URL"
echo "🎉 Deploy script completed."