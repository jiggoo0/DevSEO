import { Router } from 'express';
import { getVercelInfo } from '../controllers/vercelController.js';
const router = Router();
router.get('/', getVercelInfo);
export default router;
