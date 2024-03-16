import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import decisionRoutes from "./routes/decisionRoutes";
import mlRoutes from "./routes/mlRoutes";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/decisions", decisionRoutes);
app.use("/api/ml", mlRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI!, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

export default app;