// server/index.ts
import express, { Request, Response } from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import { users, UserData } from './data/users.js'; // <-- ต้องมี .js สำหรับ NodeNext

const app = express();
const PORT = 4000;

// Middlewares
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// Root endpoint
app.get('/', (_req: Request, res: Response) => {
  res.send('Server is running 🚀');
});

// Test endpoint
app.get('/api/ping', (_req: Request, res: Response) => res.json({ message: 'pong' }));

// Login endpoint
app.post('/api/auth/login', async (req: Request, res: Response) => {
  const { username, password } = req.body as { username?: string; password?: string };

  if (!username || !password) {
    return res.status(400).json({ message: 'กรุณากรอก username และ password' });
  }

  const user: UserData | undefined = users[username];
  if (!user) {
    return res.status(404).json({ message: 'ไม่พบผู้ใช้นี้ในระบบ' });
  }

  const match = await bcrypt.compare(password, user.hash);
  if (!match) {
    return res.status(401).json({ message: 'รหัสผ่านไม่ถูกต้อง' });
  }

  // Return user info (ไม่ส่ง hash กลับ)
  return res.json({ username: user.username, role: user.role });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});