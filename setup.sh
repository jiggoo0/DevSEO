#!/usr/bin/env bash
set -euo pipefail

# Root ของโปรเจกต์
PROJECT_ROOT="$(pwd)"

# -----------------------------
# ฟังก์ชันสร้างโฟลเดอร์และไฟล์
# -----------------------------
create_folder() {
  local folder="$1"
  mkdir -p "$folder"
  echo "📁 Created folder: $folder"
}

create_file() {
  local file="$1"
  touch "$file"
  echo "📄 Created file: $file"
}

# -----------------------------
# สร้างโฟลเดอร์ server/ ตามมาตรฐาน
# -----------------------------
SERVER_ROOT="$PROJECT_ROOT/server"

echo "🔧 Setting up server folder structure..."

create_folder "$SERVER_ROOT"
create_folder "$SERVER_ROOT/routes"
create_folder "$SERVER_ROOT/controllers"
create_folder "$SERVER_ROOT/services"
create_folder "$SERVER_ROOT/data"
create_folder "$SERVER_ROOT/types"
create_folder "$SERVER_ROOT/utils"
create_folder "$SERVER_ROOT/config"

# -----------------------------
# สร้างไฟล์หลัก
# -----------------------------
create_file "$SERVER_ROOT/index.ts"
create_file "$SERVER_ROOT/app.ts"

# ตัวอย่าง route + controller
create_file "$SERVER_ROOT/routes/auth.ts"
create_file "$SERVER_ROOT/routes/ping.ts"
create_file "$SERVER_ROOT/routes/vercel.ts"

create_file "$SERVER_ROOT/controllers/authController.ts"
create_file "$SERVER_ROOT/controllers/vercelController.ts"

# ตัวอย่าง service
create_file "$SERVER_ROOT/services/vercelService.ts"

# Mock data + types + utils + config
create_file "$SERVER_ROOT/data/users.ts"
create_file "$SERVER_ROOT/types/user.ts"
create_file "$SERVER_ROOT/utils/hash.ts"
create_file "$SERVER_ROOT/config/serverConfig.ts"

echo "✅ Server folder structure setup complete!"