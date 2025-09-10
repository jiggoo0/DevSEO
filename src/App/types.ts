'use client';

/**
 * Chat message type
 */
export interface ChatMessage {
  id: string; // Unique ID
  sender: 'user' | 'bot' | string;
  text: string;
  timestamp: number;
}

/**
 * WebSocket payload
 */
export interface WSMessagePayload {
  id: string;
  user: string;
  text: string;
  timestamp: number;
}

/**
 * WebSocket message wrapper
 */
export interface WSMessage {
  type?: string;
  payload?: WSMessagePayload | WSMessagePayload[];
  [key: string]: unknown; // safer than 'any'
}

/**
 * Optional partial chat message
 */
export type PartialChatMessage = Partial<ChatMessage> & { id?: string };

/**
 * Context state
 */
export interface ChatContextState {
  messages: ChatMessage[];
  sendMessage: (text: string) => void;
}
