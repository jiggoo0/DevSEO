// src/Router/ProtectedRoute.tsx
'use client';

import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

export interface ProtectedRouteProps {
  children: ReactNode;
  /** Roles ที่สามารถเข้าถึงเส้นทางนี้ได้ */
  allowedRoles: readonly ('admin' | 'manager' | 'user')[];
}

/**
 * ProtectedRoute:
 * - ตรวจสอบการ login ผ่าน useAuth
 * - ตรวจสอบ role ของ user
 * - redirect ไปหน้า 403 หรือ login ตามกรณี
 */
const ProtectedRoute: FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated || !user) {
    // ยังไม่ login → redirect ไปหน้า login
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    // role ไม่ตรง → redirect ไปหน้า 403
    return <Navigate to="/403" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
