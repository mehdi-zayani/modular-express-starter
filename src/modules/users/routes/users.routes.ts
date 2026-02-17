import { Router } from 'express';

import { healthUsers, getAllUsers, getUserById } from '../controllers/users.controller.js';

const router = Router();

router.get('/health', healthUsers);
router.get('/', getAllUsers);
router.get('/:id', getUserById);

export default router;
