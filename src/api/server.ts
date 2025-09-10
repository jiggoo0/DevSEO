// src/api/server.ts
import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
const PORT = process.env.PORT || 4000;

// -----------------------------
// Middleware
// -----------------------------
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// -----------------------------
// Test API Route
// -----------------------------
app.get('/api/ping', (req: Request, res: Response) => {
  res.json({ message: 'pong' });
});

// -----------------------------
// Example: Testimonials
// -----------------------------
app.get('/api/testimonials', (req: Request, res: Response) => {
  res.json([
    { id: 1, name: 'John Doe', message: 'Great service!' },
    { id: 2, name: 'Jane Smith', message: 'Very professional.' },
  ]);
});

// -----------------------------
// Start Server
// -----------------------------
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
