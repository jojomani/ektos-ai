import { Request, Response } from "express";
import { trainHRModel } from "../ml/hr/layer1";
import { identifyBiases } from "../ml/hr/layer2";
import { verifyDecisions } from "../ml/hr/layer3";

export const trainHRModel = async (req: Request, res: Response) => {
  try {
    const { dataset } = req.body;
    const model = await trainHRModel(dataset);
    const biases = await identifyBiases(dataset);
    const verifiedDecisions = await verifyDecisions(dataset, biases);
    // Store the model, biases, and verified decisions in the database
    res.status(200).json({ message: "HR model trained successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error training HR model" });
  }
};