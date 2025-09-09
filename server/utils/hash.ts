import bcrypt from "bcryptjs";

const SALT_ROUNDS = 10;

/**
 * สร้าง hash ของรหัสผ่าน
 */
export const hashPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, SALT_ROUNDS);
};

/**
 * ตรวจสอบรหัสผ่านกับ hash
 */
export const verifyPassword = async (
  password: string,
  hash: string
): Promise<boolean> => {
  return bcrypt.compare(password, hash);
};