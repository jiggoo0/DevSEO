# 📊 Project Summary Report

Date: 2025-09-10 18:29:07  
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
│   └── RootApp.tsx
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
│   │   │   └── RegistrationPreview.tsx
│   │   ├── Reviews
│   │   │   ├── ReviewsGallery.tsx
│   │   │   └── ui
│   │   │       └── ReviewCard.tsx
│   │   ├── SalaryCertificate
│   │   │   ├── SalaryCertificate.tsx
│   │   │   └── types
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
│   └── server.ts
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
│   ├── auth.ts
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
│   └── wsClient.ts
└── vite-env.d.ts

73 directories, 210 files
```

## 5️⃣ Project Info

| Item                | Value                                 |
| ------------------- | ------------------------------------- |
| Project Name        | jp-visouldocs                         |
| Version             | 7.1.1                                 |
| Description         | N/A                                   |
| GitHub URL          | https://github.com/jiggoo0/vite-react |
| Developer Email     | you@example.com                       |
| Website URL         | https://404notfontjp.vercel.app/      |
| Vercel Account      | jiggoos-projects                      |
| Vercel Project Name | vite-react                            |
| Vercel Project ID   | prj_MBF9hbw032OzD2gDVkUQ7mvoYA2t      |

## 6️⃣ Notes

- ROADMAP.md & WORKFLOW.md included if present

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

# Home Project Structure

_Generated at: Mon Sep 1 18:18:14 +07 2025_

## Directory Tree

```
Home
  hooks
    useInView.ts
  IdCardForm.tsx
  AdminTools
    IdCardPreview
      IdCardPreview.tsx
      IdCardSection.tsx
    RegistrationPreview
      RegistrationPreview.tsx
    MedicalCertificate
      MedicalCertificate.tsx
      types
        medicalCertificate.ts
    SpecialBranchCertificate
      SpecialBranchCertificate.tsx
    DriverLicense
      DriverLicenseForm.tsx
      DriverLicensePreviewWithActions.tsx
      DriverLicensePage.tsx
      DriverLicensePreview.tsx
      types
        driverLicense.ts
      ui
        FieldDraggable.tsx
        TextField.tsx
        PhotoField.tsx
    SalaryCertificate
      types
        salaryCertificate.ts
      SalaryCertificate.tsx
    Reviews
      ReviewsGallery.tsx
      ui
        ReviewCard.tsx
  CustomerAssessmentForm.tsx
  Home.tsx
  components
    About
      ui
        AboutTitle.tsx
        AboutQuote.tsx
        AboutImage.tsx
        AboutDescription.tsx
      index.ts
      About.tsx
    UserBoard
      UserBoard.tsx
    Dashboard
      ui
        RecentActivity.tsx
        QuickActions.tsx
        UserStats.tsx
        DashboardCard.tsx
        DashboardSection.tsx
      index.ts
      Dashboard.tsx
      common
        BlurContact
          motionVariants.ts
          BlurContact.tsx
        DocumentDownload
          DocumentDownload.tsx
    Testimonials
      TrustBadge.tsx
      TestimonialSlider.tsx
    Portfolio
      CaseStudyRedacted.tsx
      index.ts
      PortfolioGallery.tsx
      ui
        PortfolioCTA.tsx
        FilterButton.tsx
        PortfolioFilter.tsx
    Forms
      IdCardFormWithOCR.tsx
      index.ts
      FormWrapper.tsx
      IdCardPreview.tsx
      ui
        SelectField.tsx
        FieldGroup.tsx
        InputField.tsx
        SelectFieldUI.tsx
        TextareaField.tsx
      SubmitButton.tsx
    SellingPoints
      SpeedGuaranteeBanner.tsx
      SellingPoints.tsx
      points.ts
    Hero
      ui
        HeroStats.tsx
        HeroBadge.tsx
        HeroBackground.tsx
      Hero.tsx
      index.ts
    common
      LogoutButton.tsx
      TabPanel.tsx
      StickyTableHeader.tsx
      CardWrapper.tsx
      ThemeToggle.tsx
      LazyA4Card.tsx
      LoadingSpinner.tsx
      PageSection.tsx
      WithBlurIfUser.tsx
      CTAButtons.tsx
    ui
      Icon
        Icon.tsx
        Icon.styles.ts
        index.ts
      Card
        Card.styles.ts
        Card.tsx
      Button
        button.styles.ts
        index.ts
        Button.tsx
    Services
      ComplianceFAQ.tsx
      index.ts
      ServicesSection.tsx
      ui
        ServiceCard.tsx
      FeatureAwards.tsx
      FeatureList.tsx
    SecretSection
      AuditTrailViewer.tsx
      SecretDescription.tsx
      KbankNotificationCard.tsx
      KbankIOSNotification.tsx
  types
    auditTrail.ts
    dynamicRisk.ts
    risk.ts
    idCard.ts
    userBehavior.ts
  Login.tsx
  Profile.tsx
  AdminTools.tsx
  Settings.tsx
```

## Mermaid Diagram

```mermaid
graph TD
  subgraph AdminTools
    Home --> AdminTools
  subgraph DriverLicense
    AdminTools --> DriverLicense
  subgraph types
    DriverLicense --> types
  end
  subgraph ui
    DriverLicense --> ui
  end
  end
  subgraph IdCardPreview
    AdminTools --> IdCardPreview
  end
  subgraph MedicalCertificate
    AdminTools --> MedicalCertificate
  subgraph types
    MedicalCertificate --> types
  end
  end
  subgraph RegistrationPreview
    AdminTools --> RegistrationPreview
  end
  subgraph Reviews
    AdminTools --> Reviews
  subgraph ui
    Reviews --> ui
  end
  end
  subgraph SalaryCertificate
    AdminTools --> SalaryCertificate
  subgraph types
    SalaryCertificate --> types
  end
  end
  subgraph SpecialBranchCertificate
    AdminTools --> SpecialBranchCertificate
  end
  end
  subgraph components
    Home --> components
  subgraph About
    components --> About
  subgraph ui
    About --> ui
  end
  end
  subgraph Dashboard
    components --> Dashboard
  subgraph common
    Dashboard --> common
  subgraph BlurContact
    common --> BlurContact
  end
  subgraph DocumentDownload
    common --> DocumentDownload
  end
  end
  subgraph ui
    Dashboard --> ui
  end
  end
  subgraph Forms
    components --> Forms
  subgraph ui
    Forms --> ui
  end
  end
  subgraph Hero
    components --> Hero
  subgraph ui
    Hero --> ui
  end
  end
  subgraph Portfolio
    components --> Portfolio
  subgraph ui
    Portfolio --> ui
  end
  end
  subgraph SecretSection
    components --> SecretSection
  end
  subgraph SellingPoints
    components --> SellingPoints
  end
  subgraph Services
    components --> Services
  subgraph ui
    Services --> ui
  end
  end
  subgraph Testimonials
    components --> Testimonials
  end
  subgraph UserBoard
    components --> UserBoard
  end
  subgraph common
    components --> common
  end
  subgraph ui
    components --> ui
  subgraph Button
    ui --> Button
  end
  subgraph Card
    ui --> Card
  end
  subgraph Icon
    ui --> Icon
  end
  end
  end
  subgraph hooks
    Home --> hooks
  end
  subgraph types
    Home --> types
  end
```

## 📝 WORKFLOW.md

🎯 เป้าหมายหลัก
สร้าง ปรับแต่ง และแก้ไข Components ด้วย React + TypeScript + Vite + TailwindCSS/DaisyUI ให้มีคุณสมบัติ:

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

> ⚠️ ทุกโค้ดคือส่วนหนึ่งของเว็บไซต์ที่ใช้งานจริง ต้อง Format ให้ตรงตาม Logic และแนวทางที่กำหนด พร้อมตั้งค่าตัวแปรและสูตรคำนวณให้แม่นยำตามข้อมูลปัจจุบัน
