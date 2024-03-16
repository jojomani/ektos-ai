import express from "express";
import { trainFinancialModel } from "../controllers/financialController";
import { trainHealthcareModel } from "../controllers/healthcareController";
import { trainHRModel } from "../controllers/hrController";

const router = express.Router();

router.post("/financial", trainFinancialModel);
router.post("/healthcare", trainHealthcareModel);
router.post("/hr", trainHRModel);

export default router;