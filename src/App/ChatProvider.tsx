'use client';

import { FC, createContext, useContext, useState, ReactNode } from 'react';
import type { ChatMessage } from './types';

interface ChatContextProps {
  messages: ChatMessage[];
  sendMessage: (text: string) => void;
}

const ChatContext = createContext<ChatContextProps | undefined>(undefined);

export const ChatProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const sendMessage = (text: string) => {
    const msg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: Date.now(),
    };
    setMessages((prev) => [...prev, msg]);

    // Optionally, simulate bot reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: `ตอบกลับอัตโนมัติ: ${text}`,
          timestamp: Date.now(),
        },
      ]);
    }, 500);
  };

  return <ChatContext.Provider value={{ messages, sendMessage }}>{children}</ChatContext.Provider>;
};

export const useChat = (): ChatContextProps => {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error('useChat must be used within ChatProvider');
  return ctx;
};