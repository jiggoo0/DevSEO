export interface KbankNotificationData {
  id: string;
  transactionId: string;
  time: string;
  title: string;
  message: string;
  amount: string;
  balanceAfter: string;
  type: 'incoming' | 'outgoing';
  channel: string;
}

export const KbankNotificationCard: (props: { data: KbankNotificationData }) => JSX.Element;
