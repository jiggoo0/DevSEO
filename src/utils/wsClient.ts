// src/utils/wsClient.ts
type UserType = 'user' | 'bot';

export interface WSMessagePayload {
  id?: string;
  user: UserType;
  text?: string;
  timestamp?: number;
}

export interface WSMessage {
  type: 'history' | 'message' | 'error';
  payload?: WSMessagePayload | WSMessagePayload[];
  error?: string;
}

// -----------------------------
// Dummy implementation (no real WS)
// -----------------------------
let listeners = new Set<(msg: WSMessage) => void>();

export const connectWS = (): any => {
  console.log('⚡ Dummy WS connected (offline mode)');
  return {
    send: (msg: WSMessagePayload) => {
      // simulate echo
      setTimeout(() => {
        const response: WSMessage = {
          type: 'message',
          payload: { ...msg, user: 'bot', text: `Echo: ${msg.text}` },
        };
        listeners.forEach((cb) => cb(response));
      }, 300);
    },
    close: () => console.log('⚡ Dummy WS closed'),
  };
};

export const sendWS = (msg: WSMessagePayload): void => {
  connectWS().send(msg);
};

export const subscribeWS = (cb: (msg: WSMessage) => void): (() => void) => {
  listeners.add(cb);
  return () => listeners.delete(cb);
};