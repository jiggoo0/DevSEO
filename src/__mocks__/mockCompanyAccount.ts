import { CompanyAccountData } from '@/Home/AdminTools/CompanyAccount';

export const mockCompanyAccount: CompanyAccountData = {
  companyName: 'JP Solutions Co., Ltd.',
  accountNumber: '123-4-56789-0',
  transactions: [
    { date: '2025-09-01', type: 'โอนเข้า', amount: 15_000 },
    { date: '2025-09-02', type: 'โอนออก', amount: 5_000 },
    { date: '2025-09-03', type: 'โอนเข้า', amount: 7_500 },
    { date: '2025-09-04', type: 'โอนออก', amount: 2_300 },
  ],
};
