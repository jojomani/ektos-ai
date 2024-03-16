import express from "express";
import Decision from "../models/decision";
import { verifyToken } from "../middleware/auth";

const router = express.Router();

router.post("/", verifyToken, async (req, res) => {
  try {
    const { useCase, layer, decision, biases } = req.body;

    const newDecision = new Decision({
      user: req.userId,
      useCase,
      layer,
      decision,
      biases,
    });

    await newDecision.save();

    res.status(201).json({ message: "Decision recorded successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

export default router;