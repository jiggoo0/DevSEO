# 📊 Project Summary Report

Date: 2025-09-11 07:24:42  
Branch: main  
Git Status: Uncommitted / untracked changes ❌

## 1️⃣ Dependencies

| Dependency  | Status | Version |
| ----------- | ------ | ------- |
| react       | ✅     | ^19.1.1 |
| react-dom   | ✅     | ^19.1.1 |
| vite        | ✅     | ^7.1.5  |
| tailwindcss | ✅     | 3.4.17  |
| daisyui     | ✅     | ^3.9.4  |
| typescript  | ✅     | 5.9.2   |
| eslint      | ✅     | ^9.35.0 |
| prettier    | ✅     | ^3.6.2  |

## 2️⃣ Config Files

| Config File        | Status    |
| ------------------ | --------- |
| tsconfig.json      | ✅ exists |
| tailwind.config.ts | ✅ exists |
| vite.config.ts     | ✅ exists |
| .prettierrc        | ✅ exists |
| .gitignore         | ✅ exists |

## 3️⃣ Alias Check

- ✅ all imports alias ok (Node: v22.19.0, ts-node: N/A)

## 4️⃣ Project Tree (src, depth 10)

```
src
├── App
│   ├── ChatProvider.tsx
│   ├── RootApp.tsx
│   └── types.ts
├── Home
│   ├── AdminTools
│   │   ├── CompanyAccount
│   │   │   ├── CompanyAccount.tsx
│   │   │   ├── index.ts
│   │   │   └── types
│   │   │       └── CompanyAccount.ts
│   │   ├── CourtOrder
│   │   │   ├── CourtOrder.tsx
│   │   │   ├── index.ts
│   │   │   └── types
│   │   │       └── CourtOrder.ts
│   │   ├── DriverLicense
│   │   │   ├── DriverLicenseForm.tsx
│   │   │   ├── DriverLicensePage.tsx
│   │   │   ├── DriverLicensePreview.tsx
│   │   │   ├── DriverLicensePreviewWithActions.tsx
│   │   │   ├── types
│   │   │   │   └── driverLicense.ts
│   │   │   └── ui
│   │   │       ├── FieldDraggable.tsx
│   │   │       ├── PhotoField.tsx
│   │   │       └── TextField.tsx
│   │   ├── IdCardPreview
│   │   │   ├── IdCardPreview.tsx
│   │   │   └── IdCardSection.tsx
│   │   ├── KBankLive
│   │   │   ├── KBankLive.tsx
│   │   │   ├── index.ts
│   │   │   └── types
│   │   │       └── KBankLive.ts
│   │   ├── MedicalCertificate
│   │   │   ├── MedicalCertificate.tsx
│   │   │   └── types
│   │   │       └── medicalCertificate.ts
│   │   ├── PoliceReport
│   │   │   ├── PoliceReport.tsx
│   │   │   ├── index.ts
│   │   │   └── types
│   │   │       └── PoliceReport.ts
│   │   ├── RegistrationPreview
│   │   │   ├── RegistrationPreview.d.ts
│   │   │   ├── RegistrationPreview.tsx
│   │   │   └── types.ts
│   │   ├── Reviews
│   │   │   ├── ReviewsGallery.tsx
│   │   │   └── ui
│   │   │       └── ReviewCard.tsx
│   │   ├── SalaryCertificate
│   │   │   ├── SalaryCertificate.tsx
│   │   │   └── types
│   │   │       ├── salaryCertificate.d.ts
│   │   │       └── salaryCertificate.ts
│   │   └── SpecialBranchCertificate
│   │       └── SpecialBranchCertificate.tsx
│   ├── AdminTools.tsx
│   ├── CustomerAssessmentForm.tsx
│   ├── Home.tsx
│   ├── IdCardForm.tsx
│   ├── Login.tsx
│   ├── Profile.tsx
│   ├── Settings.tsx
│   ├── components
│   │   ├── About
│   │   │   ├── About.tsx
│   │   │   ├── index.ts
│   │   │   └── ui
│   │   │       ├── AboutDescription.tsx
│   │   │       ├── AboutImage.tsx
│   │   │       ├── AboutQuote.tsx
│   │   │       └── AboutTitle.tsx
│   │   ├── CreditAssessmentForm
│   │   │   ├── CreditAssessmentForm.tsx
│   │   │   ├── CreditProfileForm.tsx
│   │   │   └── ResultCard.tsx
│   │   ├── Dashboard
│   │   │   ├── Dashboard.tsx
│   │   │   ├── common
│   │   │   │   ├── BlurContact
│   │   │   │   │   ├── BlurContact.tsx
│   │   │   │   │   └── motionVariants.ts
│   │   │   │   └── DocumentDownload
│   │   │   │       └── DocumentDownload.tsx
│   │   │   ├── index.ts
│   │   │   └── ui
│   │   │       ├── DashboardCard.tsx
│   │   │       ├── DashboardGreeting.tsx
│   │   │       ├── DashboardSection.tsx
│   │   │       ├── QuickActions.tsx
│   │   │       ├── RecentActivity.tsx
│   │   │       └── UserStats.tsx
│   │   ├── Forms
│   │   │   ├── FormWrapper.tsx
│   │   │   ├── IdCardFormWithOCR.tsx
│   │   │   ├── IdCardPreview.tsx
│   │   │   ├── SubmitButton.tsx
│   │   │   ├── index.ts
│   │   │   └── ui
│   │   │       ├── FieldGroup.tsx
│   │   │       ├── InputField.tsx
│   │   │       ├── SelectField.tsx
│   │   │       ├── SelectFieldUI.tsx
│   │   │       └── TextareaField.tsx
│   │   ├── Hero
│   │   │   ├── Hero.tsx
│   │   │   ├── index.ts
│   │   │   └── ui
│   │   │       ├── HeroBackground.tsx
│   │   │       ├── HeroBadge.tsx
│   │   │       └── HeroStats.tsx
│   │   ├── Portfolio
│   │   │   ├── CaseStudyRedacted.tsx
│   │   │   ├── PortfolioGallery.tsx
│   │   │   ├── index.ts
│   │   │   └── ui
│   │   │       ├── FilterButton.tsx
│   │   │       ├── PortfolioCTA.tsx
│   │   │       └── PortfolioFilter.tsx
│   │   ├── SecretSection
│   │   │   ├── AuditTrailViewer.tsx
│   │   │   ├── KbankIOSNotification.tsx
│   │   │   ├── KbankNotificationCard
│   │   │   │   └── types.ts
│   │   │   ├── KbankNotificationCard.d.ts
│   │   │   ├── KbankNotificationCard.tsx
│   │   │   └── SecretDescription.tsx
│   │   ├── SellingPoints
│   │   │   ├── SellingPoints.tsx
│   │   │   ├── SpeedGuaranteeBanner.tsx
│   │   │   └── points.ts
│   │   ├── Services
│   │   │   ├── ComplianceFAQ.tsx
│   │   │   ├── FeatureAwards.tsx
│   │   │   ├── FeatureList.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── index.ts
│   │   │   └── ui
│   │   │       └── ServiceCard.tsx
│   │   ├── Testimonials
│   │   │   ├── TestimonialSlider.tsx
│   │   │   └── TrustBadge.tsx
│   │   ├── UserBoard
│   │   │   └── UserBoard.tsx
│   │   ├── common
│   │   │   ├── CTAButtons.tsx
│   │   │   ├── CardWrapper.tsx
│   │   │   ├── LazyA4Card.tsx
│   │   │   ├── LoadingSpinner.tsx
│   │   │   ├── LogoutButton.tsx
│   │   │   ├── PageSection.tsx
│   │   │   ├── StickyTableHeader.tsx
│   │   │   ├── TabPanel.tsx
│   │   │   ├── ThemeToggle.tsx
│   │   │   └── WithBlurIfUser.tsx
│   │   └── ui
│   │       ├── Button
│   │       │   ├── Button.tsx
│   │       │   ├── button.styles.ts
│   │       │   └── index.ts
│   │       ├── Card
│   │       │   ├── Card.styles.ts
│   │       │   └── Card.tsx
│   │       └── Icon
│   │           ├── Icon.styles.ts
│   │           ├── Icon.tsx
│   │           └── index.ts
│   ├── hooks
│   │   └── useInView.ts
│   └── types
│       ├── auditTrail.ts
│       ├── dynamicRisk.ts
│       ├── idCard.ts
│       ├── risk.ts
│       └── userBehavior.ts
├── Layout
│   ├── DashboardLayout.tsx
│   ├── Layout.tsx
│   ├── Navbar.tsx
│   ├── SidebarNav.tsx
│   ├── partials
│   │   ├── Footer
│   │   │   ├── Footer.tsx
│   │   │   └── index.ts
│   │   └── Header
│   │       ├── Header.tsx
│   │       └── index.ts
│   └── ui
│       ├── Logo.tsx
│       └── ThemeToggle.tsx
├── Router
│   ├── AppContent.tsx
│   ├── AppRouter.tsx
│   ├── ProtectedRoute.tsx
│   └── PublicRoute.tsx
├── ThemeProvider
│   ├── ThemeContext.tsx
│   ├── ThemeProvider.tsx
│   ├── colors.ts
│   ├── types.ts
│   └── useTheme.ts
├── __mocks__
│   ├── KbankIOSNotification.mock.ts
│   ├── kbankIOSNotification.ts
│   ├── mockCompanyAccount.ts
│   ├── mockCourtOrder.ts
│   ├── mockDriverLicenseData.ts
│   ├── mockIdCardData.ts
│   ├── mockKBankLive.ts
│   ├── mockMedicalCertificate.ts
│   ├── mockPoliceReport.ts
│   ├── mockRegistrationData.ts
│   ├── mockSalaryCertificate.ts
│   ├── mockUserBoard.ts
│   └── specialBranchCertificate.ts
├── animations
│   └── motionVariants.ts
├── api
│   ├── Chat
│   │   └── types.ts
│   ├── auth
│   │   ├── login.ts
│   │   └── me.ts
│   ├── client.ts
│   ├── ping.ts
│   ├── server.ts
│   └── testimonials.ts
├── assets
│   ├── images
│   │   └── hero-bg.webp
│   ├── logo.webp
│   └── react.svg
├── config
│   ├── assessmentConfig.ts
│   ├── dashboardCardsConfig.tsx
│   ├── driverLicenseConfig.ts
│   ├── homeSections.config.tsx
│   ├── idCardConfig.ts
│   ├── jpServices.config.tsx
│   └── secretCards.config.tsx
├── context
│   ├── AppProviders.tsx
│   ├── AuthContext.tsx
│   ├── AuthProvider.tsx
│   └── types.ts
├── data
│   ├── UserTempCodes.ts
│   ├── applicantData.ts
│   ├── caseStudies.ts
│   ├── portfolioItems.ts
│   ├── testimonialsData.ts
│   ├── theme.ts
│   └── users.ts
├── env.d.ts
├── hooks
│   ├── useAuth.tsx
│   ├── useProtectedAuth.tsx
│   └── useTempCodeAuth.ts
├── index.css
├── main.tsx
├── server
│   └── auth
│       └── login.ts
├── services
│   └── driverLicenseOcr.ts
├── styles
│   ├── driverLicense.css
│   └── global.css
├── types
│   ├── IUser.ts
│   ├── cardConfig.ts
│   ├── custom.d.ts
│   ├── dashboard.ts
│   ├── declarations.d.ts
│   └── sqljs.d.ts
├── utils
│   ├── calculations.ts
│   ├── cn.ts
│   ├── common
│   │   ├── 403.tsx
│   │   ├── BackToTop.tsx
│   │   ├── ChatWidget.tsx
│   │   ├── DisclaimerModal.tsx
│   │   ├── ErrorBoundary.tsx
│   │   ├── FallbackLoader.tsx
│   │   ├── FallbackLoading.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── ScrollProgress.tsx
│   │   ├── ScrollToTop.tsx
│   │   ├── SectionContainer.tsx
│   │   ├── SectionWrapper.tsx
│   │   └── SocialIcons.tsx
│   ├── exportCard.ts
│   ├── index.ts
│   └── wsClient.tsx
└── vite-env.d.ts

78 directories, 222 files
```

## 5️⃣ Project Info

| Item                | Value                             |
| ------------------- | --------------------------------- |
| Project Name        | projectsdevseo                    |
| Version             | 7.1.1                             |
| Description         | N/A                               |
| GitHub URL          | https://github.com/jiggoo0/DevSEO |
| Developer Email     | jiggoo0@outlook.co.th             |
| Website URL         | https://404notfontjp.vercel.app/  |
| Vercel Account      | jiggoos-projects                  |
| Vercel Project Name | dev-seo                           |
| Vercel Project ID   | prj_xMJupCGo41mdyaOFeEkB7vYXtHsQ  |

gh repo clone jiggoo0/DevSEO

## 6️⃣ Notes

- > “Static Frontend SPA with React + TypeScript, PWA-ready, environment-configurable, using local/mocked data only.”

## 📝 ROADMAP.md

📋 JP - VISOUL & DOSC – Business Overview & Technical Logic
1️⃣ ข้อมูลธุรกิจพื้นฐาน
ชื่อธุรกิจ: JP - VISOUL & DOSC
Tagline: “ทำธุรกิจสีเทาให้มีความมืออาชีพ มาตรฐาน”
ระยะเวลา: ทีมงานมีประสบการณ์ 8–9 ปี
ช่องทางติดต่อ: LINE Official @462FQFC
1.1 บริการหลัก 8 ประเภท

1. วางแผนยื่นกู้สินเชื่อ (บุคคล, SME, รีไฟแนนซ์)
2. ดูแลเอกสารยื่นวีซ่า (ทุกประเภท)
3. SLIBBANK – สลิปโอนเงิน/รับเงิน ตรวจสอบได้
4. บริการเอกสาร: แก้ไข / สร้างใหม่ / จัดหา
5. ผลิตชิ้นงานจริง (บัตรแข็ง/บัตรพลาสติก)
6. ออกแบบโลโก้ / แบนเนอร์ / ปกเพจ
7. ดูแลการตลาดครบวงจร + ระบบหลังบ้าน
8. โครงการ “ให้น้องได้พักผ่อน” – AI Matching
   2️⃣ ปรัชญาและ Logic ของธุรกิจ
   Core Logic: ช่องว่างระหว่างความต้องการจริงของคน กับข้อจำกัดของระบบราชการ/ธนาคาร
   Pain Point: คนรายได้น้อย–กลางเข้าถึงบริการยาก
   Solution: ปรับข้อมูลจริงให้ระบบยอมรับ โดยไม่สร้างข้อมูลเท็จ
   Analogy:
   “เหมือนการแต่งหน้า” → ปรับสิ่งที่มีอยู่ให้ดีที่สุด
   “เหมือนการเขียน CV” → นำเสนอข้อมูลจริงในมุมมืออาชีพ
   3️⃣ การเปิดเผยความสามารถและขีดจำกัด
   ข้อจำกัด: ปรับข้อมูลเล็กน้อยให้สมจริง แต่ไม่สร้างรายได้เกินจริง
   การเตือนลูกค้า: สื่อสารความเสี่ยงชัดเจน
   4️⃣ กฎเกณฑ์การทำงาน (Rules)
   รับเงินเท่ากับเริ่มงาน – ไม่มีข้อยกเว้น
   กรองลูกค้า: กิริยาไม่ดี = ไม่รับ
   ส่งคนอื่นมาแทน / ทำเนียน = ยึดเงิน
   ประกาศครั้งสุดท้าย: ไม่โปรโมตเรื่องนี้อีก
   สื่อสารความเสี่ยง: โปร่งใส ให้ลูกค้าตัดสินใจเอง
   5️⃣ การจัดการความเสี่ยงและ Pricing Strategy
   ความเสี่ยง ราคา
   ต่ำ 100–400 บาท
   กลาง 4,000–50,000 บาท
   สูง 25,000 บาท/รายการ
   Customer Filtering: อ่านเนื้อหา → เข้าใจธุรกิจ → ยอมจ่ายเงิน → กิริยาดี → ทำงานร่วมกันได้
   6️⃣ Business Logic & Service Design
   Service Logic & Limitations
   สินเชื่อ คนมีรายได้จริงแต่เอกสารไม่ครบ → วิเคราะห์โปรไฟล์ + จัดชุดเอกสาร
   วีซ่า ต้องพิสูจน์ความสามารถทางการเงิน → คำนวณรายรับ-รายจ่ายให้สมจริง
   SLIBBANK แสดงประวัติการเงิน ตรวจสอบได้จริง → แก้ชื่อ, เวลา, โลโก้, ยอดเงินไม่เกินขอบเขต
   เอกสาร แปลงข้อมูลจริงให้อยู่ในรูปแบบมาตรฐาน ไม่สร้างข้อมูลเท็จ
   บัตรแข็ง/พลาสติก ต้องยืนยันตัวตน ผลิตพร้อมลายน้ำ, QR, Hologram สำหรับงานยืนยันเท่านั้น
   การตลาด Branding, Ads, Automation ราคาสะท้อนขนาดงานและระบบ
   AI Matching ระบบจัดคิวงาน + แชทอัตโนมัติ ใช้กับงานเอกสารและหลังบ้าน
   โลโก้ / แบนเนอร์ ออกแบบครบชุด PNG/JPG/SVG ไม่สร้าง brand identity เกินจริง
   7️⃣ Customer Psychology Management
   สร้าง FOMO: “บางอย่างที่หาไม่ได้ที่ไหน”
   สร้างความปลอดภัย: ราคาชัดเจน, แยกแพ็กเกจ, SLA
   Trust Ladder: สงสัย → อ่าน → เข้าใจ → จ่ายเงิน → เชื่อใจ → ใช้บริการต่อ
   8️⃣ Market Positioning & Branding
   Positioning: ผู้เชี่ยวชาญ ไม่ใช่ผู้ให้บริการทั่วไป
   Scarcity Marketing: ทักษะหายาก, “ไม่กี่ที่ในประเทศทำได้”
   Authority Building: ประสบการณ์ 8–9 ปี, เปิดเผยเทคนิคบางส่วน, ยอมรับข้อจำกัด-
   9️⃣ Legal & Risk Navigation
   Legal Gray Area: ไม่อ้างว่าถูกกฎหมาย
   Customer Protection: แจ้งความเสี่ยง, ปล่อยให้ลูกค้าตัดสินใจเอง
   Communication: ใช้คำ “ปรับแต่ง / เติมเต็ม / จัดรูปแบบ” แทนคำว่า “ปลอม”
   🔟 Core DNA & Philosophy
   ปรัชญาหลัก: “เราไม่ได้แก้ปัญหาของระบบ แต่แก้ปัญหาของคนที่ถูกระบบทิ้ง”
   Value Creation:
   ลูกค้า: เข้าถึงสิทธิ์ที่ควรได้
   สังคม: ลดความเหลื่อมล้ำ
   ทีมงาน: รายได้จากความเชี่ยวชาญหายาก
   1️⃣1️⃣ Customer Journey
9. ความสงสัย → อ่านเนื้อหา
10. เข้าใจความเสี่ยง → ตัดสินใจ
11. จ่ายเงิน → ได้ผลงาน
12. เชื่อใจ → ใช้บริการต่อ
    1️⃣2️⃣ Exit & Legacy Strategy
    ประกาศครั้งสุดท้าย: ไม่โปรโมตต่อ
    ไม่โจมตีคู่แข่ง
    คงความมืออาชีพและซื่อสัตย์
    Legacy Message: “ผมทำได้ แต่ราคาเท่านี้ ส่วนใครจะทำอย่างไร ผมไม่รู้”
    13️⃣ Directory & Technical Overview
    Folder หน้าที่หลัก
    hooks ฟังก์ชัน hook สำหรับ Home / reusable logic
    types Type definitions เช่น auditTrail.ts, idCard.ts
    components UI modules แบ่งตามฟีเจอร์
    AdminTools Back-office, เอกสาร, การตรวจสอบ, การอนุมัติ
    UserBoard Front-end user metrics & dashboard
    Forms / Services / Portfolio / Hero / SellingPoints / Testimonials ส่วนประกอบ UI/UX
    UI / common Reusable components: Button, Card, Icon, PageSection, ThemeToggle

ตัวอย่างฟีเจอร์:

AdminTools → DriverLicense, MedicalCertificate, SalaryCertificate, Reviews

UserBoard → MetricCard, BadgeCard, TrustBadge, TrustDashboardDemo

Dashboard → DashboardCard, UserStats, RecentActivity, QuickActions, BlurContact, DocumentDownload

---

14️⃣ Notes / Key Points

AdminTools: งานหลังบ้าน, ตรวจสอบเอกสาร, อนุมัติ

UserBoard: แสดงข้อมูลผู้ใช้, เมตริก, dashboard, UI demo

Components: Shared UI, reusable elements, forms, portfolio, hero sections

Types & Hooks: ใช้ซ้ำทั่วทั้งระบบ

ฉันกำลังพัฒนาโปรเจค React 18 + TypeScript + Vite 7 ที่เรียกว่า "VisoulDocs"  
โปรเจคนี้เป็น SPA, มีโฟลเดอร์ Mock data, API client, และทุก component ต้อง production-ready  
เป้าหมายคือทำงานได้จริง, type-safe, และโค้ดต้องผ่าน ESLint + Prettier

2️⃣ ระบุสิ่งที่ต้องการให้ AI ทำ

สร้างโค้ด

แก้ไขโค้ดให้ production-ready

จัดโครงสร้างโฟลเดอร์

เขียน documentation / README

อัปเดต TypeScript types

ตัวอย่าง:

ช่วยสร้างไฟล์ component React + TypeScript แบบ production-ready

- Component ต้อง typed ครบทุก props และ return
- รองรับ loading, error states
- ใช้ CSS module หรือ Tailwind
- รวม mock data สำหรับ dev/test แยกใน **mocks**/
- โค้ดต้องผ่าน ESLint และ Prettier

---

3️⃣ ระบุรูปแบบการส่งผลลัพธ์

ส่ง code block พร้อมไฟล์ path

ให้ format โค้ดเรียบร้อย

แยก TypeScript types, Component, Styles

ตัวอย่าง:

ส่ง output เป็นโค้ดในรูปแบบ Markdown พร้อม path ของไฟล์  
เช่น:

src/components/MyButton/MyButton.tsx

```tsx
// โค้ด React + TS

src/components/MyButton/types.ts

// TypeScript types

---

### 4️⃣ เพิ่มกฎเข้มข้นสำหรับ Production-ready
- **ห้ามใช้ `any`**
- **Props, return, state ต้อง typed ครบ**
- **Mock data แยกใน __mocks__**
- **JSX ต้อง typed & dynamic style ใช้ Tailwind / CSS module**
- **ทุกฟังก์ชันต้องรองรับ error handling / loading / validation**

ตัวอย่าง prompt เพิ่ม:

ทุกฟังก์ชัน UI ต้อง production-ready

typed ครบทุก prop, return, state

error handling, loading, validation ครบ

mock data อยู่ใน mocks/ แยกจาก production

โค้ดต้อง clean, readable, maintainable


---

### 5️⃣ ถามผลลัพธ์เพิ่มเติม / Documentation
- สามารถขอ **คู่มือใช้งาน component**, **diagram flow**, หรือ **โครงสร้างโฟลเดอร์** ได้

ตัวอย่าง:

ช่วยสร้าง diagram แสดง folder structure และ dependency ของ component
รวมทั้ง data flow (API ↔ component)
ให้ทีมใหม่เข้าใจ workflow ได้ทันที

---

💡 **ตัวอย่าง Prompt แบบสมบูรณ์**

ฉันกำลังทำโปรเจค React 18 + TypeScript + Vite 7 ชื่อ "VisoulDocs"
เป้าหมาย: SPA, Production-ready, typed ครบ, ผ่าน ESLint/Prettier, ใช้ mock data เฉพาะ dev/test

ช่วยสร้าง component React + TypeScript production-ready:

ชื่อ component: UserCard

Props: { userId: string }

ต้องเรียก API mock หรือจริงได้ (API client ใช้ axios)

รองรับ loading, error, และ empty states

Style ใช้ Tailwind

Mock data แยกใน mocks/

ส่ง code block พร้อม path ของไฟล์ และ type definition แยก


นอกจากนี้ช่วยทำ README / usage guide สำหรับ component พร้อมตัวอย่างการใช้งาน

## 📝 WORKFLOW.md
🎯 เป้าหมายหลัก
สร้าง ปรับแต่ง และแก้ไข Components ด้วย React + > “Static Frontend SPA with React + TypeScript, PWA-ready, environment-configurable, using local/mocked data only Vite + TailwindCSS/DaisyUI ให้มีคุณสมบัติ:

- Production-ready
- Type-safe
- Minimal UI / Flat UI
- Enterprise-grade
  🛠️ แนวทางการทำงาน
- ทำงานแบบ DEV-to-DEV
- ตรวจสอบและแก้ไขโค้ดให้ตรงตามวัตถุประสงค์
- ป้องกันข้อผิดพลาดล่วงหน้า
- ส่งกลับโค้ดที่ พร้อมใช้งานทันที พร้อม Format เรียบร้อย
- แจ้งเตือนทันทีหากพบจุดที่ต้องปรับปรุงเร่งด่วน
  📏 กฎเข้มงวด
- ห้ามเปลี่ยนชื่อไฟล์หรือโครงสร้างโดยไม่ได้รับอนุญาต
- อนุญาตให้แยกหรือสร้างไฟล์ใหม่ เฉพาะกรณีที่ชัดเจนและเพิ่มประสิทธิภาพ
- ยึดแนวทาง ESLint, TypeScript strict, และ Production practices
- เน้นความแม่นยำสูงในการจัดการ Components และ Hooks
  🤖 ความสามารถของ AI
- เข้าใจโครงสร้างโปรเจกต์ Vite + React + TypeScript จาก config และ project tree
- ตรวจสอบ dependencies, alias, และไฟล์ตั้งค่าต่าง ๆ
- สร้างรายงานสรุปและตรวจสอบสภาพโปรเจกต์อัตโนมัติ
- พร้อมทำงานแบบ DEV-to-DEV เพื่อส่งมอบโค้ดที่ใช้งานจริงได้ทันที
  📂 คำสั่งการสร้าง Components
  เพิ่มโฟลเดอร์ src/Home/AdminTools
  สร้าง Components ตามรายการด้านล่าง โดยแต่ละรายการมี:
- (name).tsx สำหรับ UI
- (name).ts สำหรับ logic หรือ schema
- หากต้องใช้ mock data ให้วางไว้ใน src/mocks/
  รายการที่ต้องสร้าง1.ใบแจ้งความ
  2.ใบหมายศาล
  3.รายการบัญชีบริษัท โอนออก/โอนเข้า
  4.กสิกร live โอนเข้า/โอนออก
  5.ใบรับรองทนาย
  6.บัตรตำรวจ
  7.Scb โอนต่างประเทศ
  8.ใบฟ้อง
  9.ใบเสร็จรับเงินกรมสรรพากร
  10.เอกสารหนักสือมอบอำนาจ
  11.ใบแจ้งหนี้
  12.ตั๋วเครื่องบิน
  13.ใบค้าทะเบียนพาณิชย์
  14.ใบเสร็จโรงบาล
  รายการที่ต้องสร้าง (พร้อมหาข้อมูลจริงเพื่อความสมจริง):

1. ใบแจ้งความ
2. ใบหมายศาล
3. รายการบัญชีบริษัท โอนออก/โอนเข้า
4. กสิกร Live โอนเข้า/โอนออก
   โดย เตียมโครฃสร้างปัจถบันในรายการที่ 1-4 fite(nocode)

> ⚠️ ทุกโค้ดคือส่วนหนึ่งของเว็บไซต์ที่ใช้งานจริง ต้อง Format ให้ตรงตาม Logic และแนวทางที่กำหนด พร้อมตั้งค่าตัวแปรและสูตรคำนวณให้แม่นยำตามข้อมูลปัจจุบัน เมื่อรับราบละเอีบดทั้งหมดประมวลกลับ เพื่อให้ทาง Dev วิเคราะห์ว่า Ai สารมารถทำงานร่วมกันได้มากน้อย ขนาดใหน
```
