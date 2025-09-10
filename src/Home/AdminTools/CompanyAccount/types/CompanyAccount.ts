// types/CompanyAccount.ts
export interface Transaction {
  date: string; // "2025-09-01"
  type: 'โอนเข้า' | 'โอนออก'; // ใช้ภาษาไทย
  amount: number; // จำนวนเงิน
}

export interface CompanyAccountData {
  companyName: string;
  accountNumber: string; // "123-4-56789-0"
  transactions: Transaction[];
}
