import mongoose from "mongoose";

const decisionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  useCase: { type: String, required: true },
  layer: { type: Number, required: true },
  decision: { type: Boolean, required: true },
  biases: [{ type: String }],
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model("Decision", decisionSchema);