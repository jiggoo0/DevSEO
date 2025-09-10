import { createContext, useContext, useState } from "react";
import { ChatMessage } from "@/api/Chat/types";

interface ChatContextProps {
  messages: ChatMessage[];
  addMessage: (msg: ChatMessage) => void;
}

export const ChatContext = createContext<ChatContextProps | undefined>(undefined);

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const addMessage = (msg: ChatMessage) => setMessages(prev => [...prev, msg]);

  return (
    <ChatContext.Provider value={{ messages, addMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error("useChat must be used within ChatProvider");
  return ctx;
};