// server/app.ts
import express from 'express';
import cors from 'cors';
// Routes
import authRouter from './routes/auth.js';
import pingRouter from './routes/ping.js';
import vercelRouter from './routes/vercel.js';
const app = express();
// Config
const CLIENT_URL = process.env.VITE_APP_BASE_URL || 'http://localhost:5173';
// Middleware
app.use(cors({ origin: CLIENT_URL }));
app.use(express.json());
// Routes
app.use('/api/auth', authRouter);
app.use('/api/ping', pingRouter);
app.use('/api/vercel-info', vercelRouter);
export default app;
