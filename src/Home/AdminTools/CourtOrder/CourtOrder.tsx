"use client";

import { FC } from "react";
import { CourtOrderData } from "./types/CourtOrder";

interface CourtOrderProps {
  data: CourtOrderData;
}

const CourtOrder: FC<CourtOrderProps> = ({ data }) => {
  return (
    <div className="p-4 border rounded-xl shadow bg-base-100">
      <h2 className="text-lg font-bold mb-2">ใบหมายศาล</h2>
      <p><strong>หมายเลขคดี:</strong> {data.caseNumber}</p>
      <p><strong>วันที่ออกหมาย:</strong> {data.issueDate}</p>
      <p><strong>จำเลย:</strong> {data.defendant}</p>
      <p><strong>ข้อหา:</strong> {data.charge}</p>
    </div>
  );
};

export default CourtOrder;