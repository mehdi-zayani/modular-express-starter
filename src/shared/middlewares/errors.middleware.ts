import type { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/index.js';

export const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  // Fallback for unknown errors
  console.error(err);

  res.status(500).json({ error: 'Internal Server Error' });
};
