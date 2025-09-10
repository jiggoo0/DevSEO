'use client';

import { FC, Suspense, lazy, NamedExoticComponent } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import Layout from '@Layout/Layout';
import DashboardLayout from '@Layout/DashboardLayout';
import ScrollToTop from '@utils/common/ScrollToTop';
import FallbackLoader from '@utils/common/FallbackLoader';
import ErrorBoundary from '@utils/common/ErrorBoundary';
import ProtectedRoute from '@Router/ProtectedRoute';
import PublicRoute from '@Router/PublicRoute';
import Home from '@Home/Home';

// ==============================
// Lazy-loaded Pages
// ==============================
const Login = lazy(() => import('@Home/Login')) as NamedExoticComponent<Record<string, unknown>>;
const CustomerAssessmentForm = lazy(
  () => import('@Home/CustomerAssessmentForm'),
) as NamedExoticComponent<Record<string, unknown>>;
const Forbidden = lazy(() => import('@utils/common/403')) as NamedExoticComponent<
  Record<string, unknown>
>;
const Dashboard = lazy(
  () => import('@Home/components/Dashboard/Dashboard'),
) as NamedExoticComponent<Record<string, unknown>>;
const Profile = lazy(() => import('@Home/Profile')) as NamedExoticComponent<
  Record<string, unknown>
>;
const Settings = lazy(() => import('@Home/Settings')) as NamedExoticComponent<
  Record<string, unknown>
>;

const AdminTools: NamedExoticComponent<Record<string, unknown>> = lazy(async () => {
  try {
    const module = await import('@Home/AdminTools');
    return module as { default: NamedExoticComponent<Record<string, unknown>> };
  } catch {
    const Fallback: FC = () => (
      <div className="p-6 text-lg text-red-500">❌ โหลด AdminTools ไม่สำเร็จ</div>
    );
    return { default: Fallback } as { default: NamedExoticComponent<Record<string, unknown>> };
  }
});

// ==============================
// Lazy Page Wrapper with ErrorBoundary
// ==============================
const lazyPage = <P extends Record<string, unknown> = Record<string, unknown>>(
  Page: NamedExoticComponent<P> | FC<P>,
  props?: P,
  loadingMessage = 'กำลังโหลดหน้า...',
  errorMessage = 'เกิดข้อผิดพลาดในหน้า',
) => (
  <ErrorBoundary fallbackMessage={errorMessage}>
    <Suspense fallback={<FallbackLoader message={loadingMessage} />}>
      <Page {...(props ?? ({} as P))} />
    </Suspense>
  </ErrorBoundary>
);

// ==============================
// Dashboard Routes Configuration
// ==============================
interface DashboardRoute {
  path: string;
  roles: Array<'user' | 'manager' | 'admin'>;
  element: NamedExoticComponent<Record<string, unknown>> | FC<Record<string, unknown>>;
}

const dashboardRoutes: DashboardRoute[] = [
  { path: 'user', roles: ['user'], element: Dashboard },
  { path: 'user/profile', roles: ['user'], element: Profile },
  { path: 'user/settings', roles: ['user'], element: Settings },
  { path: 'manager', roles: ['manager'], element: Dashboard },
  { path: 'admin/dashboard', roles: ['admin'], element: Dashboard },
];

// ==============================
// App Router
// ==============================
const AppRouter: FC = () => {
  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* Public Routes */}
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<PublicRoute>{lazyPage(Login)}</PublicRoute>} />
          <Route path="form" element={lazyPage(CustomerAssessmentForm)} />
        </Route>

        {/* Protected Dashboard Routes */}
        <Route
          element={
            <ProtectedRoute allowedRoles={['user', 'manager', 'admin']}>
              <DashboardLayout>
                <Outlet />
              </DashboardLayout>
            </ProtectedRoute>
          }
        >
          {dashboardRoutes.map(({ path, roles, element }) => (
            <Route
              key={path}
              path={path}
              element={<ProtectedRoute allowedRoles={roles}>{lazyPage(element)}</ProtectedRoute>}
            />
          ))}
        </Route>

        {/* Admin Routes */}
        <Route
          path="admin"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <Layout>
                <Outlet />
              </Layout>
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={<div className="p-6 text-xl font-semibold text-white">🛠️ Admin Dashboard</div>}
          />
          <Route
            path="tools"
            element={
              <ProtectedRoute allowedRoles={['admin']}>{lazyPage(AdminTools)}</ProtectedRoute>
            }
          />
        </Route>

        {/* Fallback Route */}
        <Route path="*" element={lazyPage(Forbidden, {}, 'กำลังโหลดหน้า 403...')} />
      </Routes>
    </>
  );
};

export default AppRouter;
