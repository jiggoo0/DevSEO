#!/usr/bin/env bash

# ------------------------------
# Project clean script
# ------------------------------

# Root ของโปรเจกต์
PROJECT_ROOT="$(dirname "$0")/.."

# ------------------------------
# ฟังก์ชันลบไฟล์/โฟลเดอร์
# ------------------------------
remove_path() {
  local path="$1"
  if [ -e "$path" ]; then
    echo "🧹 Removing: $path"
    rm -rf "$path"
  fi
}

# ------------------------------
# ลบโฟลเดอร์/ไฟล์ทั่วไป
# ------------------------------
paths_to_clean=(
  "$PROJECT_ROOT/node_modules"
  "$PROJECT_ROOT/dist"
  "$PROJECT_ROOT/build"
  "$PROJECT_ROOT/.cache"
  "$PROJECT_ROOT/*.log"
)

for path in "${paths_to_clean[@]}"; do
  remove_path "$path"
done

# ------------------------------
# ลบ pnpm cache
# ------------------------------
if command -v pnpm &>/dev/null; then
  echo "🧹 Cleaning pnpm store..."
  pnpm store prune
else
  echo "⚠️ pnpm not found, skipping store prune"
fi

# ------------------------------
# เสร็จสิ้น
# ------------------------------
echo "✅ Project cleaned!"