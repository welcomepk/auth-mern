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

/*
067aspEWiX7WZXr(HhEtj__0NuTJru88q1bVbLP
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__ghp_067aspEWiX7WZXrH_hEtj0NuTJru88q1bVbLP__
HhEtj0NuTJ__ru88q_1bVbLPghp_067aspEWiX7WZXr
*/

startServer();