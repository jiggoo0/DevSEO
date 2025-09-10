import bcrypt from "bcryptjs";

export interface UserData {
  username: string;
  role: string;
  hash: string;
}

export const users: Record<string, UserData> = {
  admin: {
    username: "admin",
    role: "admin",
    hash: bcrypt.hashSync("password123", 10),
  },
  user1: {
    username: "user1",
    role: "user",
    hash: bcrypt.hashSync("mypassword", 10),
  },
};