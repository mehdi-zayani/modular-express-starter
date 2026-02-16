import type { Request, Response } from "express";

// Simple health check
export const healthAuth = (_req: Request, res: Response) => {
  res.json({ module: "auth", status: "ok" });
};

// Placeholder login endpoint
export const login = (_req: Request, res: Response) => {
  res.json({ message: "Login endpoint placeholder" });
};

// Placeholder register endpoint
export const register = (_req: Request, res: Response) => {
  res.json({ message: "Register endpoint placeholder" });
};
