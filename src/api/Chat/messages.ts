// src/api/Chat/messages.ts
import fs from 'fs';
import path from 'path';
import { ChatMessage } from './types';

const STORE_PATH = path.resolve(process.cwd(), 'chat-history.json');

let messageStore: ChatMessage[] = [];
const listeners = new Set<(messages: ChatMessage[]) => void>();

// ---- Load persisted messages ----
(() => {
  if (fs.existsSync(STORE_PATH)) {
    try {
      const data = JSON.parse(fs.readFileSync(STORE_PATH, 'utf-8')) as ChatMessage[];
      messageStore = Array.isArray(data) ? data : [];
    } catch (err) {
      console.error('⚠️ Failed to load chat-history.json:', err);
    }
  }
})();

function persist() {
  try {
    fs.writeFileSync(STORE_PATH, JSON.stringify(messageStore, null, 2), 'utf-8');
  } catch (err) {
    console.error('⚠️ Failed to save chat-history.json:', err);
  }
}

function snapshot(): ChatMessage[] {
  return structuredClone(messageStore);
}

// ---- Core store API ----
export function notifyAll(): void {
  const snap = snapshot();
  for (const cb of listeners) cb(snap);
}

export async function getMessages(): Promise<ChatMessage[]> {
  return snapshot();
}

export async function clearMessages(): Promise<void> {
  messageStore = [];
  persist();
  notifyAll();
}

export function subscribe(cb: (messages: ChatMessage[]) => void): () => void {
  listeners.add(cb);
  cb(snapshot());
  return () => listeners.delete(cb);
}

export function pushMessage(msg: ChatMessage): void {
  messageStore.push(msg);
  persist();
  notifyAll();
}
