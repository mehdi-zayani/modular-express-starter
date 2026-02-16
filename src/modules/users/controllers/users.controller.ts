import type { Request, Response } from "express";

// Simple health check
export const healthUsers = (_req: Request, res: Response) => {
  res.json({ module: "users", status: "ok" });
};

// Placeholder get all users
export const getAllUsers = (_req: Request, res: Response) => {
  res.json({ message: "Get all users endpoint placeholder" });
};

// Placeholder get user by id
export const getUserById = (_req: Request, res: Response) => {
  res.json({ message: "Get user by ID endpoint placeholder" });
};
