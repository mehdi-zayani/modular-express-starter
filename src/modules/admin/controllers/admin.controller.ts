import type { Request, Response } from 'express';

// Simple health check
export const healthAdmin = (_req: Request, res: Response) => {
  res.json({ module: 'admin', status: 'ok' });
};

// Placeholder get all admins
export const getAllAdmins = (_req: Request, res: Response) => {
  res.json({ message: 'Get all admins endpoint placeholder' });
};

// Placeholder get admin by id
export const getAdminById = (_req: Request, res: Response) => {
  res.json({ message: 'Get admin by ID endpoint placeholder' });
};
