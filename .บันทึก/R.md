📁 ไฟล์ที่ควรเพิ่ม (แยกตามหมวด)

🔹 1. Config & Schema
| ไฟล์ | บทบาท |
|------|--------|
| src/config/dashboardCards.tsx | กำหนด schema และ metadata สำหรับ Dashboard card |

🔹 2. Layout & Structure
| ไฟล์ | บทบาท |
|------|--------|
| src/layouts/DashboardLayout.tsx
🔹 3. UI Components (Reusable)
| ไฟล์ | บทบาท |
|------|--------|
ui
/StatusBadge.tsx | แสดงสถานะเอกสาร เช่น “รอตรวจสอบ”, “ผ่านแล้ว” |
EmptyState.tsx | แสดงเมื่อไม่มีข้อมูล เช่น “ยังไม่มีเอกสาร” |
SectionHeader.tsx | ใช้ใน DashboardSection เพื่อแสดงหัวข้อ |
ActionButton.tsx | ปุ่มที่มี icon + label เช่น “ดูรายละเอียด” |
ardAnimation.ts | จัดการ motion variants สำหรับ card |

🔹 5. Types & Validation
| ไฟล์ | บทบาท |
|------|--------|
| src/types/dashboard.ts | กำหนด type ของ DashboardCard, Section, Permission |
