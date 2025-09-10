import { Request, Response } from 'express';
import { fetchVercelProjects } from '../services/vercelService.js';

export const getVercelInfo = async (_req: Request, res: Response) => {
  try {
    const data = await fetchVercelProjects();
    return res.json({ vercel: data });
  } catch (err: unknown) {
    return res
      .status(500)
      .json({ message: 'Failed to fetch from Vercel', error: (err as Error).message });
  }
};
