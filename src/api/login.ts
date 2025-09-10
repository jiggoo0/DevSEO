import type { VercelRequest, VercelResponse } from '@vercel/node';
import bcrypt from 'bcryptjs';
import { users, UserData } from '@/data/users';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { username, password } = req.body as { username: string; password: string };
  const user: UserData | undefined = users[username];

  if (!user) return res.status(401).json({ error: 'Invalid username or password' });

  const valid = await bcrypt.compare(password, user.hash);
  if (!valid) return res.status(401).json({ error: 'Invalid username or password' });

  const token = `mock-${username}-${Date.now()}`;

  return res.status(200).json({
    token,
    user: { username, role: user.role },
  });
}