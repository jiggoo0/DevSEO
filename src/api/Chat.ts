// src/api/Chat.ts
import type { Request, Response } from "express";
import { WebSocketServer, WebSocket } from "ws";
import { z } from "zod";
import crypto from "crypto";

// ------------------------------
// Types
// ------------------------------
export interface ChatMessage {
  id: string;
  user: "user" | "bot";
  text: string;
  timestamp: number;
}

// ------------------------------
// In-memory store
// ------------------------------
const messages: ChatMessage[] = [];

// ------------------------------
// REST API: get all messages
// ------------------------------
export const getMessages = (_req: Request, res: Response) => {
  res.json(messages);
};

// ------------------------------
// Validation schema
// ------------------------------
const messageSchema = z.object({
  user: z.enum(["user", "bot"]),
  text: z.string().min(1),
});

// ------------------------------
// WebSocket: init
// ------------------------------
export const initChat = (wss: WebSocketServer) => {
  wss.on("connection", (ws: WebSocket) => {
    // ส่งประวัติทั้งหมดทันที
    ws.send(JSON.stringify({ type: "history", payload: messages }));

    // Bot connected message
    const botMessage: ChatMessage = {
      id: crypto.randomUUID(),
      user: "bot",
      text: "🟢 Connected to chat server",
      timestamp: Date.now(),
    };
    ws.send(JSON.stringify({ type: "message", payload: botMessage }));

    ws.on("message", (msg: string | Buffer) => {
      const text = typeof msg === "string" ? msg : msg.toString();

      let parsed: { user: "user" | "bot"; text: string };
      try {
        parsed = JSON.parse(text);
        messageSchema.parse(parsed);
      } catch {
        ws.send(JSON.stringify({ type: "error", error: "Invalid message format" }));
        return;
      }

      const message: ChatMessage = {
        id: crypto.randomUUID(),
        user: parsed.user,
        text: parsed.text,
        timestamp: Date.now(),
      };

      messages.push(message);

      // Broadcast ทุก client (รวม sender)
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type: "message", payload: message }));
        }
      });
    });

    ws.on("error", (err) => {
      console.error("WebSocket error:", err);
    });
  });
};