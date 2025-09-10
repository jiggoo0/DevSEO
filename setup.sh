#!/usr/bin/env bash
set -euo pipefail

BASE_DIR="src/Home/AdminTools"

# -----------------------------
# สร้างฟังก์ชันสร้างโมดูล
# -----------------------------
create_module() {
  local MODULE=$1
  local TYPE_CONTENT=$2
  local MOCK_CONTENT=$3
  local COMPONENT_CONTENT=$4

  MODULE_DIR="$BASE_DIR/$MODULE"
  TYPES_DIR="$MODULE_DIR/types"
  MOCK_DIR="$MODULE_DIR/__mocks__"

  mkdir -p "$TYPES_DIR"
  mkdir -p "$MOCK_DIR"

  # types
  echo "$TYPE_CONTENT" > "$TYPES_DIR/$MODULE.ts"

  # mock
  echo "$MOCK_CONTENT" > "$MOCK_DIR/mock$MODULE.ts"

  # component
  echo "$COMPONENT_CONTENT" > "$MODULE_DIR/$MODULE.tsx"

  # index.ts สำหรับ export
  echo "export * from './$MODULE';
export * from './types/$MODULE';
export * from './__mocks__/mock$MODULE';" > "$MODULE_DIR/index.ts"
}

# -----------------------------
# PoliceReport
# -----------------------------
POLICE_TYPE="export interface PoliceReport {
  reportNumber: string;
  date: string;
  policeStation: string;
  complainant: string;
  description: string;
}"

POLICE_MOCK="import { PoliceReport } from '../types/PoliceReport';
export const mockPoliceReport: PoliceReport = {
  reportNumber: 'PR-2025-001',
  date: '2025-09-09',
  policeStation: 'Bangkok Central',
  complainant: 'John Doe',
  description: 'Report of missing document'
};"

POLICE_COMPONENT="import React from 'react';
import { PoliceReport } from './types/PoliceReport';

interface Props { report: PoliceReport; }

export const PoliceReportCard: React.FC<Props> = ({ report }) => (
  <div className='border rounded-lg p-4 shadow-sm bg-white'>
    <h2 className='font-bold text-lg'>Police Report #{report.reportNumber}</h2>
    <p className='text-sm text-gray-500'>{report.date} | {report.policeStation}</p>
    <p className='mt-2'><span className='font-semibold'>Complainant:</span> {report.complainant}</p>
    <p className='mt-1'><span className='font-semibold'>Description:</span> {report.description}</p>
  </div>
);"

create_module "PoliceReport" "$POLICE_TYPE" "$POLICE_MOCK" "$POLICE_COMPONENT"

# -----------------------------
# CourtOrder
# -----------------------------
COURT_TYPE="export interface CourtOrder {
  caseNumber: string;
  courtName: string;
  issueDate: string;
  plaintiff: string;
  defendant: string;
  summary: string;
}"

COURT_MOCK="import { CourtOrder } from '../types/CourtOrder';
export const mockCourtOrder: CourtOrder = {
  caseNumber: 'C-2025-045',
  courtName: 'Bangkok Civil Court',
  issueDate: '2025-08-20',
  plaintiff: 'ABC Co., Ltd.',
  defendant: 'John Doe',
  summary: 'Dispute regarding contract payment'
};"

COURT_COMPONENT="import React from 'react';
import { CourtOrder } from './types/CourtOrder';

interface Props { order: CourtOrder; }

export const CourtOrderCard: React.FC<Props> = ({ order }) => (
  <div className='border rounded-lg p-4 shadow-sm bg-white'>
    <h2 className='font-bold text-lg'>Court Order #{order.caseNumber}</h2>
    <p className='text-sm text-gray-500'>{order.issueDate} | {order.courtName}</p>
    <p className='mt-2'><span className='font-semibold'>Plaintiff:</span> {order.plaintiff}</p>
    <p className='mt-1'><span className='font-semibold'>Defendant:</span> {order.defendant}</p>
    <p className='mt-1'><span className='font-semibold'>Summary:</span> {order.summary}</p>
  </div>
);"

create_module "CourtOrder" "$COURT_TYPE" "$COURT_MOCK" "$COURT_COMPONENT"

# -----------------------------
# CompanyAccount
# -----------------------------
COMPANY_TYPE="export interface CompanyTransaction {
  date: string;
  description: string;
  amount: number;
  type: 'IN' | 'OUT';
  balance: number;
}"

COMPANY_MOCK="import { CompanyTransaction } from '../types/CompanyAccount';
export const mockCompanyAccount: CompanyTransaction[] = [
  { date: '2025-09-01', description: 'Invoice Payment', amount: 50000, type: 'IN', balance: 150000 },
  { date: '2025-09-02', description: 'Office Rent', amount: 20000, type: 'OUT', balance: 130000 },
];"

COMPANY_COMPONENT="import React from 'react';
import { CompanyTransaction } from './types/CompanyAccount';

interface Props { transactions: CompanyTransaction[]; }

export const CompanyAccountCard: React.FC<Props> = ({ transactions }) => (
  <div className='border rounded-lg p-4 shadow-sm bg-white'>
    {transactions.map((t, i) => (
      <div key={i} className='mb-2'>
        <p className='font-semibold'>{t.date} | {t.description}</p>
        <p>{t.type} {t.amount} | Balance: {t.balance}</p>
      </div>
    ))}
  </div>
);"

create_module "CompanyAccount" "$COMPANY_TYPE" "$COMPANY_MOCK" "$COMPANY_COMPONENT"

# -----------------------------
# KBankLive
# -----------------------------
KBANK_TYPE="export interface KBankTransaction {
  timestamp: string;
  accountNumber: string;
  name: string;
  type: 'DEPOSIT' | 'WITHDRAW';
  amount: number;
  balance: number;
}"

KBANK_MOCK="import { KBankTransaction } from '../types/KBankLive';
export const mockKBankLive: KBankTransaction[] = [
  { timestamp: '2025-09-01T10:00:00', accountNumber: '123-456-7890', name: 'John Doe', type: 'DEPOSIT', amount: 10000, balance: 50000 },
  { timestamp: '2025-09-02T15:30:00', accountNumber: '123-456-7890', name: 'John Doe', type: 'WITHDRAW', amount: 5000, balance: 45000 },
];"

KBANK_COMPONENT="import React from 'react';
import { KBankTransaction } from './types/KBankLive';

interface Props { transactions: KBankTransaction[]; }

export const KBankLiveCard: React.FC<Props> = ({ transactions }) => (
  <div className='border rounded-lg p-4 shadow-sm bg-white'>
    {transactions.map((t, i) => (
      <div key={i} className='mb-2'>
        <p className='font-semibold'>{t.timestamp} | {t.name}</p>
        <p>{t.type} {t.amount} | Balance: {t.balance}</p>
      </div>
    ))}
  </div>
);"

create_module "KBankLive" "$KBANK_TYPE" "$KBANK_MOCK" "$KBANK_COMPONENT"

echo "✅ All 4 AdminTools modules created and ready for use!"