// src/App/RootApp.tsx
'use client';

import { FC, Suspense } from 'react';
import AppProviders from '@/context/AppProviders';
import { ChatProvider } from '@/App/ChatProvider';
import AppRouter from '@/Router/AppRouter';
import ChatWidget from '@/utils/common/ChatWidget';
import ErrorBoundary from '@/utils/common/ErrorBoundary';
import FallbackLoader from '@/utils/common/FallbackLoader';

/**
 * RootApp
 * -------------------------
 * ครอบคลุม:
 * - AppProviders: context หลักของระบบ
 * - ChatProvider: chat system context
 * - ErrorBoundary: จับทุก error ภายใน App
 * - Suspense + FallbackLoader: สำหรับ lazy loading ของหน้า
 * - ChatWidget: widget แชท อยู่ภายใน ChatProvider
 */
const RootApp: FC = () => {
  return (
    <AppProviders>
      <ChatProvider>
        <ErrorBoundary fallbackMessage="เกิดข้อผิดพลาดในระบบ กรุณารีเฟรชหน้าใหม่">
          <Suspense fallback={<FallbackLoader message="กำลังโหลดแอป..." />}>
            <AppRouter />
          </Suspense>

          {/* Chat Widget ต้องอยู่ภายใน ChatProvider */}
          <ChatWidget autoCloseMs={15000} />
        </ErrorBoundary>
      </ChatProvider>
    </AppProviders>
  );
};

export default RootApp;
