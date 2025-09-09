"use client";

import { FC } from "react";
import { PoliceReportData } from "./types/PoliceReport";

interface PoliceReportProps {
  data: PoliceReportData;
}

const PoliceReport: FC<PoliceReportProps> = ({ data }) => {
  return (
    <div className="p-4 border rounded-xl shadow-md bg-base-100">
      <h2 className="text-lg font-bold mb-2">ใบแจ้งความ</h2>
      <p><strong>เลขที่:</strong> {data.reportNumber}</p>
      <p><strong>วันที่:</strong> {data.date}</p>
      <p><strong>ผู้แจ้ง:</strong> {data.reporterName}</p>
      <p><strong>รายละเอียด:</strong> {data.details}</p>
    </div>
  );
};

export default PoliceReport;