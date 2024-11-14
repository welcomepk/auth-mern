import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";
import connectDB from "./config/db";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes)


const PORT = process.env.PORT || 8080

async function startServer() {

    await connectDB();

    app.listen(PORT, () => {
        console.log('server is up on port ' + PORT);
    })
}

startServer();