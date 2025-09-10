'use client';

import { FC, Suspense, memo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { getLazyCards, EffectiveRole, LazyCard } from '@/config/secretCards.config';
import PageSection from '@/Home/components/common/PageSection';
import LoadingSpinner from '@/Home/components/common/LoadingSpinner';

const AdminTools: FC = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect unauthenticated users to login
  useEffect(() => {
    if (!isAuthenticated || !user) navigate('/login', { replace: true });
  }, [isAuthenticated, user, navigate]);

  if (!isAuthenticated || !user) return null;

  // Validate role
  const effectiveRole: EffectiveRole = ['admin', 'manager', 'user'].includes(user.role)
    ? (user.role as EffectiveRole)
    : 'user';

  const safeUser = {
    username: user.username || 'unknown',
    role: effectiveRole,
  };

  // Fetch lazy-loaded cards
  const lazyCards: LazyCard[] = getLazyCards(safeUser, effectiveRole);

  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="mx-auto max-w-[1200px] space-y-8 px-4 sm:px-6 lg:px-8">
        {lazyCards.length > 0 ? (
          lazyCards.map((card) => (
            <PageSection key={`${card.title}-${card.delay}`} hideTitle>
              <Suspense fallback={<LoadingSpinner className="w-full py-6" />}>
                {card.component ?? <LoadingSpinner className="w-full py-6" />}
              </Suspense>
            </PageSection>
          ))
        ) : (
          <div className="w-full py-12 text-center text-gray-500">ไม่มีข้อมูลสำหรับแสดงผล</div>
        )}
      </div>
    </main>
  );
};

AdminTools.displayName = 'AdminTools';
export default memo(AdminTools);
