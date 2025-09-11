// Types สำหรับ PoliceReport

export interface PoliceReportData {
  reportNumber: string;
  date: string;
  reporterName: string;
  details: string;
}

export interface PoliceReportProps {
  data: PoliceReportData;
}
