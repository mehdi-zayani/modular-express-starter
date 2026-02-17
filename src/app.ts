import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { authRoutes } from './modules/auth/index.js';
import { usersRoutes } from './modules/users/index.js';
import { adminRoutes } from './modules/admin/index.js';
import { systemRoutes } from './modules/system/index.js';
import { errorMiddleware, authMiddleware } from './shared/middlewares/index.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Public routes (no auth)
app.use('/api/auth', authRoutes);
app.use('/api/system', systemRoutes);

// Protected routes (with auth middleware)
app.use('/api/users', authMiddleware, usersRoutes);
app.use('/api/admin', authMiddleware, adminRoutes);

// Global error handler
app.use(errorMiddleware);

export default app;
