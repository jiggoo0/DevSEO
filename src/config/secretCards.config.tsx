'use client';

import { ReactNode, ReactElement, lazy, Suspense } from 'react';
import WithBlurIfUser from '@Home/components/common/WithBlurIfUser';
import KbankNotificationCard from '@Home/components/SecretSection/KbankNotificationCard';
import DriverLicenseForm from '@Home/AdminTools/DriverLicense/DriverLicenseForm';
import IdCardForm from '@Home/IdCardForm';

import kbankMockData from '@__mocks__/kbankIOSNotification';
import mockRegistrationData from '@__mocks__/mockRegistrationData';
import mockSalaryCertificate from '@__mocks__/mockSalaryCertificate';
import mockMedicalCertificate from '@__mocks__/mockMedicalCertificate';
import { mockPoliceReport } from '@__mocks__/mockPoliceReport';
import { mockCourtOrder } from '@__mocks__/mockCourtOrder';
import { mockCompanyAccount } from '@__mocks__/mockCompanyAccount';
import { mockKBankLive } from '@__mocks__/mockKBankLive';

import PoliceReport from '@Home/AdminTools/PoliceReport';
import CourtOrder from '@Home/AdminTools/CourtOrder';
import CompanyAccount from '@Home/AdminTools/CompanyAccount';
import KBankLive from '@Home/AdminTools/KBankLive';

// ==============================
// Lazy-loaded Admin Components
// ==============================
const RegistrationPreview = lazy(
  () => import('@Home/AdminTools/RegistrationPreview/RegistrationPreview'),
);
const SalaryCertificate = lazy(
  () => import('@Home/AdminTools/SalaryCertificate/SalaryCertificate'),
);
const MedicalCertificate = lazy(
  () => import('@Home/AdminTools/MedicalCertificate/MedicalCertificate'),
);
const SpecialBranchCertificate = lazy(
  () => import('@Home/AdminTools/SpecialBranchCertificate/SpecialBranchCertificate'),
);

// ==============================
// Types
// ==============================
export type EffectiveRole = 'admin' | 'user' | 'manager';

export interface LazyCard {
  title: string;
  component: ReactElement;
  delay: number;
  fallback?: ReactNode;
}

interface User {
  username: string;
  role: EffectiveRole;
}

// ==============================
// Constants
// ==============================
const BASE_DELAY = 50;

// ==============================
// Wrappers
// ==============================
const wrapBlur = (
  node: ReactNode,
  isBlurred = false,
  overlayMessage?: ReactNode,
  key?: string | number,
): ReactElement => (
  <WithBlurIfUser key={key} isBlurred={isBlurred} overlayMessage={overlayMessage}>
    {node}
  </WithBlurIfUser>
);

const withFallback = (node: ReactElement, fallback?: ReactNode): ReactElement => (
  <Suspense fallback={fallback ?? <div className="text-center py-6 text-gray-500">Loading...</div>}>
    {node}
  </Suspense>
);

// ==============================
// Main: Generate Lazy Cards
// ==============================
export const getLazyCards = (user: User, effectiveRole: EffectiveRole): LazyCard[] => {
  const isAdminOrManager = ['admin', 'manager'].includes(effectiveRole);
  const shouldBlur = effectiveRole !== 'admin';

  let delayCounter = 0;
  const nextDelay = () => (delayCounter += BASE_DELAY);

  const baseCards: LazyCard[] = [
    {
      title: 'Driver License Form',
      component: wrapBlur(
        <DriverLicenseForm role={effectiveRole} />,
        shouldBlur,
        'เฉพาะแอดมินเท่านั้น',
      ),
      delay: nextDelay(),
    },
    {
      title: 'ID Card Form',
      component: wrapBlur(<IdCardForm role={effectiveRole} />, shouldBlur, 'เฉพาะแอดมินเท่านั้น'),
      delay: nextDelay(),
    },
    {
      title: 'Registration Preview',
      component: wrapBlur(
        withFallback(<RegistrationPreview {...mockRegistrationData} />),
        shouldBlur,
        'เฉพาะแอดมินเท่านั้น',
      ),
      delay: nextDelay(),
    },
    {
      title: 'Salary Certificate',
      component: wrapBlur(
        withFallback(<SalaryCertificate data={mockSalaryCertificate} />),
        shouldBlur,
        'เฉพาะแอดมินเท่านั้น',
      ),
      delay: nextDelay(),
    },
    {
      title: 'Medical Certificate',
      component: wrapBlur(
        withFallback(<MedicalCertificate data={mockMedicalCertificate} />),
        shouldBlur,
        'เฉพาะแอดมินเท่านั้น',
      ),
      delay: nextDelay(),
    },
    {
      title: 'Kbank Notifications',
      component: (
        <>
          {kbankMockData.map((item) =>
            wrapBlur(
              <KbankNotificationCard data={item} />,
              shouldBlur,
              'เฉพาะแอดมินเท่านั้น',
              item.id,
            ),
          )}
        </>
      ),
      delay: nextDelay(),
    },
    {
      title: 'Police Report',
      component: wrapBlur(
        withFallback(<PoliceReport data={mockPoliceReport} />),
        shouldBlur,
        'เฉพาะแอดมินเท่านั้น',
      ),
      delay: nextDelay(),
    },
    {
      title: 'Court Order',
      component: wrapBlur(
        withFallback(<CourtOrder data={mockCourtOrder} />),
        shouldBlur,
        'เฉพาะแอดมินเท่านั้น',
      ),
      delay: nextDelay(),
    },
    {
      title: 'Company Account',
      component: wrapBlur(
        withFallback(<CompanyAccount data={mockCompanyAccount} />),
        shouldBlur,
        'เฉพาะแอดมินเท่านั้น',
      ),
      delay: nextDelay(),
    },
    {
      title: 'KBank Live',
      component: wrapBlur(
        withFallback(<KBankLive data={mockKBankLive} />),
        shouldBlur,
        'เฉพาะแอดมินเท่านั้น',
      ),
      delay: nextDelay(),
    },
  ];

  if (isAdminOrManager) {
    baseCards.push({
      title: 'Special Branch Certificate',
      component: withFallback(
        <SpecialBranchCertificate />,
        <div className="text-center py-6 text-gray-500">Loading Special Branch Certificate...</div>,
      ),
      delay: nextDelay(),
    });
  }

  return baseCards;
};
