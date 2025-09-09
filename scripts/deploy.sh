#!/usr/bin/env bash
# -----------------------------
# Full CI/CD Deploy Script for Vercel
# -----------------------------
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ENV_FILE="$ROOT_DIR/.env.production"
DEPLOY_LOG="$ROOT_DIR/DEPLOY_URL.txt"

# -----------------------------
# Load .env.production
# -----------------------------
if [[ -f "$ENV_FILE" ]]; then
  echo "🔑 Loading environment from $ENV_FILE"
  set -a
  source "$ENV_FILE"
  set +a
else
  echo "❌ Missing $ENV_FILE"
  exit 1
fi

# -----------------------------
# Validate required variables
# -----------------------------
: "${VERCEL_TOKEN:?VERCEL_TOKEN not set}"
: "${VERCEL_PROJECT_ID:?VERCEL_PROJECT_ID not set}"
: "${VITE_API_URL:?VITE_API_URL not set}"
: "${VITE_APP_NAME:?VITE_APP_NAME not set}"
: "${VITE_APP_BASE_URL:?VITE_APP_BASE_URL not set}"

# -----------------------------
# Install dependencies & build
# -----------------------------
echo "📦 Installing dependencies..."
pnpm install

echo "🔨 Building backend..."
tsc -p "$ROOT_DIR/tsconfig.json"     # Backend → dist-server/

echo "🔨 Building frontend..."
vite build                           # Frontend → dist/

# -----------------------------
# Ensure on main branch
# -----------------------------
BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [[ "$BRANCH" != "main" ]]; then
  echo "❌ You must be on branch 'main' to deploy production."
  exit 1
fi

# -----------------------------
# Deploy to Vercel
# -----------------------------
echo "🌿 Deploying branch '$BRANCH' → production (force rebuild)"
DEPLOY_URL=$(npx vercel --yes --token "$VERCEL_TOKEN" --prod --force)

# -----------------------------
# Log deploy URL
# -----------------------------
echo "$DEPLOY_URL" | tee "$DEPLOY_LOG"
echo "✅ Deployment finished"
echo "🔗 $DEPLOY_URL"

# -----------------------------
# Check if production site is live
# -----------------------------
echo "🔍 Checking if production site is live..."
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$DEPLOY_URL")
if [[ "$HTTP_STATUS" == "200" ]]; then
  echo "🌟 Production site is live! HTTP $HTTP_STATUS"
else
  echo "⚠️ Production site returned HTTP $HTTP_STATUS"
fi

echo "🎉 Deploy script completed."