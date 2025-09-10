import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { users, UserData } from "../data/users.js";

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body as { username?: string; password?: string };

  if (!username || !password)
    return res.status(400).json({ message: "กรุณากรอก username และ password" });

  const user: UserData | undefined = users[username];
  if (!user) return res.status(404).json({ message: "ไม่พบผู้ใช้นี้ในระบบ" });

  try {
    const match = await bcrypt.compare(password, user.hash);
    if (!match) return res.status(401).json({ message: "รหัสผ่านไม่ถูกต้อง" });
    return res.json({ username: user.username, role: user.role });
  } catch (err: unknown) {
    return res.status(500).json({ message: "Internal server error", error: (err as Error).message });
  }
};