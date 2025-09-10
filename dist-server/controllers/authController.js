import bcrypt from 'bcryptjs';
import { users } from '../data/users.js';
export const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ message: 'กรุณากรอก username และ password' });
  const user = users[username];
  if (!user) return res.status(404).json({ message: 'ไม่พบผู้ใช้นี้ในระบบ' });
  try {
    const match = await bcrypt.compare(password, user.hash);
    if (!match) return res.status(401).json({ message: 'รหัสผ่านไม่ถูกต้อง' });
    return res.json({ username: user.username, role: user.role });
  } catch (err) {
    return res.status(500).json({ message: 'Internal server error', error: err.message });
  }
};
