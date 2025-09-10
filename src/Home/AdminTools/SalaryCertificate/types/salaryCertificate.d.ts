export interface SalaryCertificateData {
  companyName: string;
  companyNameEn: string;
  certificateNumber: string;
  employeeName: string;
  startDate: string;
  position: string;
  department: string;
  salary: number;
  positionAllowance: number;
  costOfLiving: number;
  issueDate: string;
  signPosition: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
}

export const SalaryCertificate: (props: { data: SalaryCertificateData }) => JSX.Element;
