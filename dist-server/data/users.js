import bcrypt from 'bcryptjs';
export const users = {
  admin: {
    username: 'admin',
    role: 'admin',
    hash: bcrypt.hashSync('password123', 10),
  },
  user1: {
    username: 'user1',
    role: 'user',
    hash: bcrypt.hashSync('mypassword', 10),
  },
};
