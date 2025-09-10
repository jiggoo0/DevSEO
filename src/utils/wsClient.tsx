// src/utils/wsClient.tsx
'use client';

export type UserType = 'user' | 'bot';

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

const WS_URL = (() => {
  const API_URL = '/'; // standalone project, dummy
  return API_URL.replace(
    /^https?:\/\//,
    window.location.protocol === 'https:' ? 'wss://' : 'ws://',
  );
})();

let socket: WebSocket | null = null;
let reconnectTimer: number | null = null;
const messageQueue: WSMessagePayload[] = [];
const listeners = new Set<(msg: WSMessage) => void>();

export const connectWS = (): WebSocket => {
  if (
    socket &&
    (socket.readyState === WebSocket.OPEN || socket.readyState === WebSocket.CONNECTING)
  ) {
    return socket;
  }

  socket = new WebSocket(WS_URL);

  socket.onopen = () => {
    console.log('✅ WS connected:', WS_URL);
    while (messageQueue.length) {
      const msg = messageQueue.shift();
      if (msg) socket?.send(JSON.stringify(msg));
    }
  };

  socket.onmessage = (event) => {
    try {
      const data: WSMessage = JSON.parse(event.data);
      listeners.forEach((cb) => cb(data));
    } catch (err) {
      console.error('❌ WS parse error:', err);
    }
  };

  socket.onclose = () => {
    console.warn('⚡ WS closed, reconnect in 3s...');
    if (!reconnectTimer) {
      reconnectTimer = window.setTimeout(() => {
        reconnectTimer = null;
        connectWS();
      }, 3000);
    }
  };

  socket.onerror = (err) => console.error('❌ WS error:', err);

  return socket;
};

export const sendWS = (msg: WSMessagePayload): void => {
  if (!socket || socket.readyState !== WebSocket.OPEN) {
    messageQueue.push(msg);
    return;
  }
  socket.send(JSON.stringify(msg));
};

export const subscribeWS = (cb: (msg: WSMessage) => void): (() => void) => {
  listeners.add(cb);
  return () => listeners.delete(cb);
};
