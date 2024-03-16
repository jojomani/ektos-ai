import { Request, Response } from "express";
import { trainHealthcareModel } from "../ml/healthcare/layer1";
import { identifyBiases } from "../ml/healthcare/layer2";
import { verifyDecisions } from "../ml/healthcare/layer3";

export const trainHealthcareModel = async (req: Request, res: Response) => {
  try {
    const { dataset } = req.body;
    const model = await trainHealthcareModel(dataset);
    const biases = await identifyBiases(dataset);
    const verifiedDecisions = await verifyDecisions(dataset, biases);
    // Store the model, biases, and verified decisions in the database
    res.status(200).json({ message: "Healthcare model trained successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error training healthcare model" });
  }
};