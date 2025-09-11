#!/usr/bin/env bash
set -euo pipefail

REPORT="NOTEDEVSEO_SUMMARY.md"
GREEN="\033[0;32m"
RESET="\033[0m"

term_log() { echo -e "$1"; }

# -----------------------------
# 0️⃣ Safe load .env
# -----------------------------
if [ -f .env ]; then
  while IFS='=' read -r key value; do
    [[ "$key" =~ ^#.*$ ]] && continue
    if [[ "$key" =~ ^[A-Za-z_][A-Za-z0-9_]*$ ]]; then
      export "$key=$value"
    fi
  done < <(grep -v '^\s*$' .env)
fi

# -----------------------------
# 1️⃣ Git Status
# -----------------------------
if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  BRANCH=$(git symbolic-ref --short HEAD 2>/dev/null || git rev-parse --short HEAD)
  if git diff --quiet && git diff --cached --quiet && [ -z "$(git ls-files --others --exclude-standard)" ]; then
    GIT_STATUS="Clean ✅"
  else
    GIT_STATUS="Uncommitted / untracked changes ❌"
  fi
else
  BRANCH="N/A"
  GIT_STATUS="Not a git repo ❌"
fi

# -----------------------------
# 2️⃣ Dependencies
# -----------------------------
REQUIRED_PKGS=(react react-dom vite tailwindcss daisyui typescript eslint prettier)
DEP_TABLE="| Dependency | Status | Version |"$'\n'"|------------|--------|---------|"

if [ -f package.json ]; then
  for pkg in "${REQUIRED_PKGS[@]}"; do
    VERSION=$(jq -r ".dependencies[\"$pkg\"] // .devDependencies[\"$pkg\"] // .peerDependencies[\"$pkg\"] // empty" package.json)
    if [ -n "$VERSION" ]; then
      DEP_TABLE+=$'\n'"| $pkg | ✅ | $VERSION |"
    else
      DEP_TABLE+=$'\n'"| $pkg | ❌ | - |"
    fi
  done
else
  DEP_TABLE+=$'\n'"| - | ❌ | package.json not found |"
fi

# -----------------------------
# 3️⃣ Config Files
# -----------------------------
CONFIG_FILES=(tsconfig.json tailwind.config.ts vite.config.ts  .prettierrc .gitignore)
CONFIG_TABLE="| Config File | Status |"$'\n'"|------------|--------|"

for f in "${CONFIG_FILES[@]}"; do
  if [ -f "$f" ]; then
    CONFIG_TABLE+=$'\n'"| $f | ✅ exists |"
  else
    CONFIG_TABLE+=$'\n'"| $f | ❌ missing |"
  fi
done

# -----------------------------
# 4️⃣ Alias Check
# -----------------------------
ALIAS_STATUS="Not checked ❌"
if [ -f scripts/alias.ts ]; then
  NODE_VER=$(node -v)
  TSNODE_VER=$(ts-node -v 2>/dev/null || echo "N/A")
  OUTPUT=$(node -r ts-node/register scripts/alias.ts --check 2>&1 || true)
  if echo "$OUTPUT" | grep -q "❌"; then
    ALIAS_STATUS="❌ alias issues (Node: $NODE_VER, ts-node: $TSNODE_VER)"
  else
    ALIAS_STATUS="✅ all imports alias ok (Node: $NODE_VER, ts-node: $TSNODE_VER)"
  fi
fi

# -----------------------------
# 5️⃣ Project Tree
# -----------------------------
TREE_TOP="src"
if [ -d "$TREE_TOP" ]; then
  TREE_CONTENT=$(command -v tree >/dev/null 2>&1 && tree -L 10 "$TREE_TOP" || find "$TREE_TOP" -maxdepth 10 -print)
else
  TREE_CONTENT="> ❌ $TREE_TOP folder not found"
fi

# -----------------------------
# 6️⃣ Project Info
# -----------------------------

GITHUB_URL="${GITHUB_URL:-https://github.com/jiggoo0/DevSEO}"
DEVELOPER_EMAIL="${DEVELOPER_EMAIL:-jiggoo0@outlook.co.th}"
WEBSITE_URL="${WEBSITE_URL:-https://404notfontjp.vercel.app/}"
VERCEL_ACCOUNT="${VERCEL_ACCOUNT:-jiggoos-projects}"
VERCEL_PROJECT_NAME="${VERCEL_PROJECT_NAME:-dev-seo}"
VERCEL_PROJECT_ID="${VERCEL_PROJECT_ID:-prj_xMJupCGo41mdyaOFeEkB7vYXtHsQ}"

# ---------------------------------------------
# Read package.json info safely
# ---------------------------------------------
PKG_NAME=$(jq -r '.name // "vite-react"' package.json 2>/dev/null)
PKG_VER=$(jq -r '.version // "1.0.0"' package.json 2>/dev/null)
PKG_DESC=$(jq -r '.description // "N/A"' package.json 2>/dev/null)

# ---------------------------------------------
# Display Project Info
# ---------------------------------------------
PROJECT_INFO=$(cat <<EOF
| Item                 | Value |
|----------------------|-------|
| Project Name         | $PKG_NAME |
| Version              | $PKG_VER |
| Description          | $PKG_DESC |
| GitHub URL           | $GITHUB_URL |
| Developer Email      | $DEVELOPER_EMAIL |
| Website URL          | $WEBSITE_URL |
| Vercel Account       | $VERCEL_ACCOUNT |
| Vercel Project Name  | $VERCEL_PROJECT_NAME |
| Vercel Project ID    | $VERCEL_PROJECT_ID |
gh repo clone jiggoo0/DevSEO
EOF
)

# -----------------------------
# 7️⃣ Generate Summary Report
# -----------------------------
NOW=$(date +"%Y-%m-%d %H:%M:%S")
cat > "$REPORT" <<EOF
# 📊 Project Summary Report
Date: $NOW  
Branch: $BRANCH  
Git Status: $GIT_STATUS

## 1️⃣ Dependencies
$DEP_TABLE

## 2️⃣ Config Files
$CONFIG_TABLE

## 3️⃣ Alias Check
- $ALIAS_STATUS

## 4️⃣ Project Tree (src, depth 10)
\`\`\`
$TREE_CONTENT
\`\`\`

## 5️⃣ Project Info
$PROJECT_INFO

## 6️⃣ Notes
- > “Static Frontend SPA with React + TypeScript, PWA-ready, environment-configurable, using local/mocked data only.”

EOF

# Append RODEMAP.md and WORKFLOW.md if exists
for file in ROADMAP.md WORKFLOW.md; do
  [ -f "$file" ] && echo -e "\n## 📝 $file\n$(cat "$file")" >> "$REPORT"
done

term_log "${GREEN}✅ Summary report generated: $REPORT${RESET}"