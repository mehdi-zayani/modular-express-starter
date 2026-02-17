import { Router } from 'express';

import { healthAuth, login, register } from '../controllers/auth.controller.js';

const router = Router();

router.get('/health', healthAuth);
router.post('/login', login);
router.post('/register', register);

export default router;
