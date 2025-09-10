'use client';

import { FC } from 'react';
import { KBankLiveData } from './types/KBankLive';

interface KBankLiveProps {
  data: KBankLiveData;
}

const KBankLive: FC<KBankLiveProps> = ({ data }) => {
  return (
    <div className="p-4 border rounded-xl shadow bg-base-100">
      <h2 className="text-lg font-bold mb-2">กสิกร LIVE</h2>
      <p>
        <strong>ผู้ส่ง:</strong> {data.sender}
      </p>
      <p>
        <strong>ผู้รับ:</strong> {data.receiver}
      </p>
      <p>
        <strong>จำนวนเงิน:</strong> {data.amount} บาท
      </p>
      <p>
        <strong>เวลา:</strong> {data.timestamp}
      </p>
    </div>
  );
};

export default KBankLive;
