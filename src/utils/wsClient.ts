// src/utils/wsClient.ts
const apiUrl = import.meta.env.VITE_API_URL!;
const wsUrl = apiUrl.replace(/^http/, window.location.protocol === "https:" ? "wss" : "ws");

let socket: WebSocket | null = null;
let reconnectTimer: ReturnType<typeof setTimeout> | null = null;
const messageQueue: WSMessagePayload[] = [];
const listeners = new Set<(msg: WSMessage) => void>();

export interface WSMessagePayload {
  id?: string;
  user: "user" | "bot";
  text?: string;
  timestamp?: number;
  createdAt?: number;
}

export interface WSMessage {
  type: "history" | "message" | "error";
  payload?: WSMessagePayload | WSMessagePayload[];
  error?: string;
}

/**
 * เชื่อมต่อ WebSocket พร้อม auto-reconnect และ queue
 */
export const connectWS = (): WebSocket => {
  if (
    socket &&
    (socket.readyState === WebSocket.OPEN || socket.readyState === WebSocket.CONNECTING)
  ) {
    return socket;
  }

  socket = new WebSocket(wsUrl);

  socket.onopen = () => {
    console.log("✅ WS connected:", wsUrl);

    while (messageQueue.length > 0) {
      const msg = messageQueue.shift();
      if (msg) socket?.send(JSON.stringify(msg));
    }
  };

  socket.onmessage = (event: MessageEvent<string>) => {
    try {
      const data: WSMessage = JSON.parse(event.data);
      listeners.forEach((cb) => cb(data));
    } catch (err) {
      console.error("❌ Failed to parse WS message:", err);
    }
  };

  socket.onclose = () => {
    console.warn("⚡ WS closed, retry in 3s...");
    if (!reconnectTimer) {
      reconnectTimer = setTimeout(() => {
        reconnectTimer = null;
        connectWS();
      }, 3000);
    }
  };

  socket.onerror = (err) => console.error("❌ WS error:", err);

  return socket;
};

/**
 * ส่งข้อความผ่าน WS (ถ้า connection ยังไม่พร้อม จะเก็บไว้ใน queue)
 */
export const sendWS = (msg: WSMessagePayload): void => {
  if (!socket || socket.readyState !== WebSocket.OPEN) {
    messageQueue.push(msg);
    return;
  }
  socket.send(JSON.stringify(msg));
};

/**
 * สมัคร listener เพื่อรับ message จาก WS
 * คืนค่าฟังก์ชันสำหรับ unsubscribe
 */
export const subscribeWS = (cb: (msg: WSMessage) => void): (() => void) => {
  listeners.add(cb);
  return () => listeners.delete(cb);
};
