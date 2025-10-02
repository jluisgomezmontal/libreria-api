import express from "express";
import { trackComponent, getStats, exportCSV, healthCheck } from "../controllers/components.controller.js";
import { validateTrack } from "../middleware/validate.middleware.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();
router.post("/track", validateTrack, trackComponent);
router.get("/stats", getStats);
router.get("/export", protect, exportCSV);
router.get("/health", healthCheck);
export default router;
