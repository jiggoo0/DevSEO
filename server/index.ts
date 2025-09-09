// server/index.ts
import express, { Request, Response } from "express";
import cors from "cors";
import bcrypt from "bcryptjs";
import fetch from "node-fetch";
import { users, UserData } from "./data/users";

const app = express();

// -----------------------------
// Config
// -----------------------------
const PORT = Number(process.env.PORT) || 4000;
const CLIENT_URL = process.env.VITE_APP_BASE_URL || "http://localhost:5173";
const VERCEL_OIDC_TOKEN = process.env.VERCEL_OIDC_TOKEN || "";
const isProduction = process.env.NODE_ENV === "production";

// -----------------------------
// Middleware
// -----------------------------
app.use(cors({ origin: CLIENT_URL }));
app.use(express.json());

// -----------------------------
// Health check
// -----------------------------
app.get("/", (_req: Request, res: Response) => {
  res.send("Server is running 🚀");
});

app.get("/api/ping", (_req: Request, res: Response) => {
  res.json({ message: "pong" });
});

// -----------------------------
// Auth login
// -----------------------------
app.post("/api/auth/login", async (req: Request, res: Response) => {
  const { username, password } = req.body as {
    username?: string;
    password?: string;
  };

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "กรุณากรอก username และ password" });
  }

  const user: UserData | undefined = users[username];
  if (!user) {
    return res.status(404).json({ message: "ไม่พบผู้ใช้นี้ในระบบ" });
  }

  const match = await bcrypt.compare(password, user.hash);
  if (!match) {
    return res.status(401).json({ message: "รหัสผ่านไม่ถูกต้อง" });
  }

  return res.json({ username: user.username, role: user.role });
});

// -----------------------------
// Server-side fetch to Vercel API using OIDC JWT
// -----------------------------
app.get("/api/vercel-info", async (_req: Request, res: Response) => {
  if (!VERCEL_OIDC_TOKEN || !isProduction) {
    return res.status(403).json({
      message: "OIDC token not configured or not production",
    });
  }

  try {
    const response = await fetch("https://api.vercel.com/v1/projects", {
      headers: { Authorization: `Bearer ${VERCEL_OIDC_TOKEN}` },
    });

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ message: "Vercel API error", status: response.status });
    }

    const data = await response.json();
    return res.json({ vercel: data });
  } catch (err: unknown) {
    return res.status(500).json({
      message: "Failed to fetch from Vercel",
      error: (err as Error).message,
    });
  }
});

// -----------------------------
// Start server
// -----------------------------
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});