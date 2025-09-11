'use client';

import { FC } from 'react';
import { PoliceReportData } from './types/PoliceReport';

interface PoliceReportProps {
  data: PoliceReportData;
}

const PoliceReport: FC<PoliceReportProps> = ({ data }) => {
  return (
    <div
      className="bg-white shadow-lg border border-gray-300 p-8 mx-auto my-6"
      style={{
        width: '210mm', // A4 width
        minHeight: '297mm', // A4 height
      }}
    >
      <header className="mb-6 text-center">
        <h1 className="text-3xl font-bold">ใบแจ้งความ</h1>
        <p className="text-sm text-gray-500 mt-1">ระบบ VisoulDocs</p>
      </header>

      <section className="mb-4">
        <p className="mb-2">
          <strong>เลขที่แจ้งความ:</strong> {data.reportNumber}
        </p>
        <p className="mb-2">
          <strong>วันที่:</strong> {data.date}
        </p>
        <p className="mb-2">
          <strong>ผู้แจ้ง:</strong> {data.reporterName}
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">รายละเอียดเหตุการณ์</h2>
        <p>{data.details}</p>
      </section>

      <footer className="mt-12 text-right text-sm text-gray-500">VisoulDocs © 2025</footer>
    </div>
  );
};

export default PoliceReport;
