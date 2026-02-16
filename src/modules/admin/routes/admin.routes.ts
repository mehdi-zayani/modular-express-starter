import { Router } from "express";
import { healthAdmin, getAllAdmins, getAdminById } from "../controllers/admin.controller.js";

const router = Router();

router.get("/health", healthAdmin);
router.get("/", getAllAdmins);
router.get("/:id", getAdminById);

export default router;
