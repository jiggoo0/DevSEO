import type { VercelRequest, VercelResponse } from '@vercel/node';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { users, UserData } from '@/data/users';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });

  const { username, password } = req.body;
  const userData: UserData | undefined = users[username];

  if (!userData) return res.status(401).json({ message: 'Invalid credentials' });

  const match = await bcrypt.compare(password, userData.hash);
  if (!match) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ username, role: userData.role }, process.env.JWT_SECRET!, {
    expiresIn: '1h',
  });

  res.status(200).json({ username, role: userData.role, token });
}
