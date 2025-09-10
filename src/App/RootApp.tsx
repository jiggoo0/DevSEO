// RootApp.tsx
"use client";

import { FC, Suspense } from "react";
import AppProviders from "@/context/AppProviders";
import { ChatProvider } from "@/App/ChatProvider";
import AppRouter from "@/Router/AppRouter";
import ErrorBoundary from "@/utils/common/ErrorBoundary";
import FallbackLoader from "@/utils/common/FallbackLoader";

const RootApp: FC = () => (
  <AppProviders>
    <ChatProvider>
      <ErrorBoundary fallbackMessage="เกิดข้อผิดพลาดในระบบ กรุณารีเฟรชหน้าใหม่">
        <Suspense fallback={<FallbackLoader message="กำลังโหลดแอป..." />}>
          <AppRouter />
        </Suspense>
      </ErrorBoundary>
    </ChatProvider>
  </AppProviders>
);

export default RootApp;