// src/App/ChatProvider.tsx
'use client';

import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: number;
}

interface WSChatMessage {
  id: string;
  user: string;
  text: string;
  timestamp: number;
}

interface WSMessageEvent {
  type: 'history' | 'message' | 'error';
  payload: WSChatMessage | WSChatMessage[];
  error?: string;
}

interface ChatContextProps {
  messages: ChatMessage[];
  sendMessage: (text: string) => void;
}

const ChatContext = createContext<ChatContextProps | undefined>(undefined);

function mapPayloadToMessages(payload: WSChatMessage | WSChatMessage[]): ChatMessage[] {
  const arr = Array.isArray(payload) ? payload : [payload];
  return arr.map((m) => ({
    id: m.id,
    sender: m.user === 'user' ? 'user' : 'bot',
    text: m.text,
    timestamp: m.timestamp,
  }));
}

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const wsRef = useRef<WebSocket | null>(null);

  // Connect WebSocket once
  useEffect(() => {
    const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
    const wsUrl = `${protocol}://${window.location.host}/ws`;
    const ws = new WebSocket(wsUrl);
    wsRef.current = ws;

    ws.onmessage = (event: MessageEvent) => {
      try {
        const data: WSMessageEvent = JSON.parse(event.data);
        switch (data.type) {
          case 'history':
            setMessages(mapPayloadToMessages(data.payload));
            break;
          case 'message':
            setMessages((prev) => {
              const newMsgs = mapPayloadToMessages(data.payload);
              const existingIds = new Set(prev.map((m) => m.id));
              return [...prev, ...newMsgs.filter((m) => !existingIds.has(m.id))];
            });
            break;
          case 'error':
            console.error('WS error:', data.error);
            break;
        }
      } catch (err) {
        console.error('Failed to parse WS message', err);
      }
    };

    ws.onclose = () => console.log('Chat WS closed');
    ws.onerror = (e) => console.error('Chat WS error', e);

    return () => {
      if (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING) ws.close();
    };
  }, []);

  // Send message
  const sendMessage = useCallback(async (text: string) => {
    const cleanText = text.trim();
    if (!cleanText) return;

    const tempMsg: ChatMessage = {
      id: crypto.randomUUID(),
      sender: 'user',
      text: cleanText,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, tempMsg]);

    try {
      if (wsRef.current?.readyState === WebSocket.OPEN) {
        wsRef.current.send(JSON.stringify({ user: 'user', text: cleanText }));
      } else {
        throw new Error('WS not open');
      }
    } catch {
      await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: 'user', text: cleanText }),
      });
    }
  }, []);

  return <ChatContext.Provider value={{ messages, sendMessage }}>{children}</ChatContext.Provider>;
};

export const useChat = (): ChatContextProps => {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error('useChat must be used within ChatProvider');
  return ctx;
};
