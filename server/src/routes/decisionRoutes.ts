import express from "express";
import decisionController from "../controllers/decisionController";
import { verifyToken } from "../middleware/auth";

const router = express.Router();

router.post("/", verifyToken, decisionController.recordDecision);

export default router;