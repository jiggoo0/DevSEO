// src/Home/components/SecretSection/KbankNotificationCard/types.ts

export interface KbankNotificationData {
  id: string;
  type?: 'incoming' | 'outgoing' | 'failed';
  title?: string;
  subtitle?: string;
  message?: string;
  amount?: string;
  balanceAfter?: string;
  channel?: string;
  transactionId: string;
  time: string;
  qrCodeUrl?: string;
}
