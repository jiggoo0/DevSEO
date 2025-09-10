// src/utils/common/ChatWidget.tsx
'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SocialIcons from './SocialIcons';
import { connectWS, sendWS, subscribeWS, WSMessagePayload, WSMessage } from '@/utils/wsClient';

interface ChatWidgetProps {
  autoCloseMs?: number; // ปิด widget อัตโนมัติหลัง timeout
}

const ChatWidget = ({ autoCloseMs = 15000 }: ChatWidgetProps) => {
  const [messages, setMessages] = useState<WSMessagePayload[]>([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const autoCloseTimer = useRef<number | null>(null);

  // -------------------- WS Connection --------------------
  useEffect(() => {
    const ws = connectWS();

    const unsubscribe = subscribeWS((msg: WSMessage) => {
      if (msg.payload) {
        setMessages((prev) =>
          Array.isArray(msg.payload) ? [...prev, ...msg.payload] : [...prev, msg.payload!],
        );
      }
    });

    return () => {
      unsubscribe();
      ws.close();
    };
  }, []);

  // -------------------- Chat Handlers --------------------
  const toggleChat = useCallback(() => setIsOpen((prev) => !prev), []);

  const handleSend = () => {
    if (!input.trim()) return;
    const msg: WSMessagePayload = {
      user: 'user',
      text: input,
      timestamp: Date.now(),
    };
    sendWS(msg);
    setMessages((prev) => [...prev, msg]);
    setInput('');
  };

  // -------------------- Auto-close --------------------
  useEffect(() => {
    if (isOpen) {
      autoCloseTimer.current = window.setTimeout(() => setIsOpen(false), autoCloseMs);
    }
    return () => {
      if (autoCloseTimer.current) clearTimeout(autoCloseTimer.current);
      autoCloseTimer.current = null;
    };
  }, [isOpen, autoCloseMs]);

  // -------------------- Close on ESC --------------------
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // -------------------- Auto-scroll --------------------
  useEffect(() => {
    if (scrollRef.current) {
      requestAnimationFrame(() =>
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' }),
      );
    }
  }, [messages]);

  // -------------------- Focus input --------------------
  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  // -------------------- Render --------------------
  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Toggle Button */}
      <button
        onClick={toggleChat}
        className="p-3 rounded-full bg-primary text-white shadow-lg hover:scale-105 transition-transform"
        aria-label={isOpen ? 'ปิดแชท' : 'เปิดแชท'}
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-widget"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="absolute bottom-14 right-0 w-80 max-h-[400px] bg-base-100 rounded-2xl shadow-2xl border border-base-300 flex flex-col"
          >
            {/* Header */}
            <div className="p-3 border-b font-semibold">Chat</div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-3 space-y-2">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`p-2 rounded-lg max-w-[75%] ${
                    msg.user === 'user' ? 'ml-auto bg-primary text-white' : 'mr-auto bg-base-200'
                  }`}
                >
                  <div>{msg.text}</div>
                  <div className="text-xs text-gray-400 mt-1">
                    {msg.timestamp ? new Date(msg.timestamp).toLocaleTimeString() : ''}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex p-2 border-t">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 input input-sm input-bordered rounded-l-lg"
                placeholder="พิมพ์ข้อความ..."
              />
              <button onClick={handleSend} className="btn btn-sm btn-primary rounded-l-none">
                ส่ง
              </button>
            </div>

            {/* Social Icons */}
            <div className="p-2 border-t">
              <SocialIcons />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatWidget;
