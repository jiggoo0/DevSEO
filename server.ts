import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import path from 'path';
import { WebSocketServer, WebSocket } from 'ws';

// ------------------------------
// Server Config
// ------------------------------
const app = express();
const PORT = process.env.PORT || 4000;

// ------------------------------
// Middleware
// ------------------------------
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/assets', express.static(path.join(__dirname, 'src/assets')));

// ------------------------------
// API Routes
// ------------------------------
app.get('/api/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', timestamp: new Date() });
});

app.post('/api/echo', (req: Request, res: Response) => {
  res.status(200).json({ received: req.body });
});

// ------------------------------
// 404 Handler
// ------------------------------
app.use((_req: Request, res: Response) => {
  res.status(404).json({ error: 'Not Found' });
});

// ------------------------------
// Global Error Handler
// ------------------------------
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});

// ------------------------------
// Start HTTP Server
// ------------------------------
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

// ------------------------------
// WebSocket Server
// ------------------------------
const wss = new WebSocketServer({ server });

wss.on('connection', (ws: WebSocket) => {
  console.log('🔗 New WebSocket connection established');

  // Echo incoming messages back to client
  ws.on('message', (message: string) => {
    console.log('Received:', message);
    ws.send(`Echo: ${message}`);
  });

  ws.on('close', () => {
    console.log('⚡ WebSocket connection closed');
  });
});
