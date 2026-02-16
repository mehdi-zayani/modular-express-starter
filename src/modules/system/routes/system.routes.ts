import { Router } from "express";
import { healthSystem, getSystemInfo, updateSystemSettings } from "../controllers/system.controller.js";

const router = Router();

router.get("/health", healthSystem);
router.get("/info", getSystemInfo);
router.post("/settings", updateSystemSettings);

export default router;
