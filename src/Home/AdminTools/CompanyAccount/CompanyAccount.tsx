"use client";

import { FC } from "react";
import { CompanyAccountData } from "./types/CompanyAccount";

interface CompanyAccountProps {
  data: CompanyAccountData;
}

// ฟังก์ชัน format จำนวนเงิน + คอมม่า
const formatAmount = (amount: number) => amount.toLocaleString("th-TH");

const CompanyAccount: FC<CompanyAccountProps> = ({ data }) => {
  return (
    <div className="p-6 border rounded-xl shadow bg-base-100">
      <h2 className="text-xl font-bold mb-4">รายการบัญชีบริษัท</h2>
      <p className="mb-1"><strong>ชื่อบริษัท:</strong> {data.companyName}</p>
      <p className="mb-3"><strong>เลขบัญชี:</strong> {data.accountNumber}</p>
      <ul className="mt-2 space-y-2 list-disc list-inside">
        {data.transactions.map((t, i) => (
          <li key={i} className="text-sm">
            <span className="font-medium">{t.date}</span> – {t.type} – <span className="text-blue-600">{formatAmount(t.amount)} บาท</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyAccount;