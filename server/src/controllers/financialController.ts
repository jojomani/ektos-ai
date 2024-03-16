import { Request, Response } from "express";
import { trainFinancialModel } from "../ml/financial/layer1";
import { identifyBiases } from "../ml/financial/layer2";
import { verifyDecisions } from "../ml/financial/layer3";

export const trainFinancialModel = async (req: Request, res: Response) => {
  try {
    const { dataset } = req.body;
    const model = await trainFinancialModel(dataset);
    const biases = await identifyBiases(dataset);
    const verifiedDecisions = await verifyDecisions(dataset, biases);
    // Store the model, biases, and verified decisions in the database
    res.status(200).json({ message: "Financial model trained successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error training financial model" });
  }
};