import express from "express";
import cors from "cors";
import { authRoutes } from "./modules/auth/index.js";
import { usersRoutes } from "./modules/users/index.js";
import { adminRoutes } from "./modules/admin/index.js";
import { systemRoutes } from "./modules/system/index.js";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});
app.use("/auth", authRoutes);
app.use("/users", usersRoutes);
app.use("/admin", adminRoutes);
app.use("/system", systemRoutes);

export default app;
