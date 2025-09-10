import axios from 'axios';

// ใช้ fallback สำหรับ server-side หรือ runtime ที่ไม่รองรับ import.meta.env
const API_BASE = import.meta?.env?.VITE_API_URL || 'http://localhost:4000/api';

export const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

// -------------------- API Endpoints --------------------
export const login = (email: string, password: string) =>
  api.post('/auth/login', { email, password });

export const getProfile = () => api.get('/auth/me');