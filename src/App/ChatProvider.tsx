// src/App/ChatProvider.tsx
"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { connectWS, subscribeWS, sendWS, WSMessage, WSMessagePayload } from "@/utils/wsClient";

// ------------------------------
// Types
// ------------------------------
export interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: number;
}

interface ChatContextProps {
  messages: ChatMessage[];
  addMessage: (msg: ChatMessage) => void;
  sendMessage: (text: string) => void;
}

// ------------------------------
// Context
// ------------------------------
const ChatContext = createContext<ChatContextProps | undefined>(undefined);

// ------------------------------
// Provider
// ------------------------------
export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const addMessage = useCallback((msg: ChatMessage) => {
    setMessages((prev) => [...prev, msg]);
  }, []);

  const sendMessage = useCallback(
    (text: string) => {
      if (!text.trim()) return;

      const msg: ChatMessage = {
        id: crypto.randomUUID(),
        sender: "user",
        text,
        timestamp: Date.now(),
      };

      addMessage(msg);
      sendWS({ user: "user", text });
    },
    [addMessage]
  );

  useEffect(() => {
    const ws = connectWS();

    const unsub = subscribeWS((data: WSMessage) => {
      if (!data) return;

      if (data.type === "history" || data.type === "message") {
        const payloadArray = Array.isArray(data.payload) ? data.payload : [data.payload];
        const validMessages = payloadArray.filter((m): m is WSMessagePayload => !!m);

        const newMessages: ChatMessage[] = validMessages.map((m) => ({
          id: m.id ?? crypto.randomUUID(),
          sender: m.user === "user" ? "user" : "bot",
          text: m.text ?? "",
          timestamp: m.timestamp ?? m.createdAt ?? Date.now(),
        }));

        setMessages((prev) => {
          const existingIds = new Set(prev.map((m) => m.id));
          return [...prev, ...newMessages.filter((m) => !existingIds.has(m.id))];
        });
      } else if (data.type === "error") {
        console.error("❌ WS error:", data.error ?? "Unknown error");
      }
    });

    return () => {
      unsub();
      if (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING) ws.close();
    };
  }, []);

  return (
    <ChatContext.Provider value={{ messages, addMessage, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

// ------------------------------
// Hook
// ------------------------------
export const useChat = (): ChatContextProps => {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error("useChat must be used within ChatProvider");
  return ctx;
};