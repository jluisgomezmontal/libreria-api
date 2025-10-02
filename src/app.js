import express from "express";
import cors from "cors";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import componentRoutes from "./routes/components.routes.js";
import { connectDB } from "./config/db.js";


const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/auth", authRoutes);
app.use("/api/components", componentRoutes);

export default app;
