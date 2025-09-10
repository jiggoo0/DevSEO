'use client';

import React, { FC, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import AppProviders from '@/context/AppProviders';
import AppRouter from '@/Router/AppRouter';
import ErrorBoundary from '@/utils/common/ErrorBoundary';
import FallbackLoader from '@/utils/common/FallbackLoader';

// Styles
import '@radix-ui/themes/styles.css';
import '@Styles/global.css';
import '@Styles/driverLicense.css';
import '@/index.css';

/**
 * RootApp
 * -------------------------
 * ครอบคลุม:
 * - AppProviders: context หลักของระบบ
 * - ErrorBoundary: จับทุก error ภายใน App
 * - Suspense + FallbackLoader: สำหรับ lazy loading ของหน้า
 */
const RootApp: FC = () => (
  <AppProviders>
    <ErrorBoundary fallbackMessage="เกิดข้อผิดพลาดในระบบ กรุณารีเฟรชหน้าใหม่">
      <Suspense fallback={<FallbackLoader message="กำลังโหลดแอป..." />}>
        <AppRouter />
      </Suspense>
    </ErrorBoundary>
  </AppProviders>
);

/**
 * Ensure root element exists
 */
const ensureRootElement = (): HTMLElement => {
  let root = document.getElementById('root');
  if (!root) {
    root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);
  }
  return root;
};

/**
 * React 18 Root API
 */
const root = ReactDOM.createRoot(ensureRootElement());
root.render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>,
);

// -------------------- Dev Info (optional, dummy) --------------------
if (import.meta.env.DEV) {
  console.groupCollapsed('📦 JP-System App Info');
  console.info('🚀 Version:', 'dev'); // dummy
  console.info('📝 Build Time:', new Date().toISOString()); // dummy
  console.info('🔧 Mode:', 'development');
  console.info('🌍 Base URL:', '/');
  console.groupEnd();
}

// -------------------- Service Worker --------------------
// ปิดหรือคอมเมนต์ออก เพราะ project standalone ไม่ต้องพึ่ง SW
// if ('serviceWorker' in navigator && import.meta.env.PROD) {
//   navigator.serviceWorker
//     .register(`/sw.js`)
//     .then((reg) => console.log('✅ SW registered:', reg.scope))
//     .catch((err) => console.error('❌ SW registration failed:', err));
// }

export {};