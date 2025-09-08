export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: number;
}

export interface WSMessagePayload {
  id?: string;
  user: 'user' | 'bot';
  text?: string;
  timestamp?: number;
  createdAt?: number;
}

export interface WSMessage {
  type: 'history' | 'message' | 'error';
  payload?: WSMessagePayload | WSMessagePayload[];
  error?: string;
}
