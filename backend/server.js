import express from 'express';
import dotenv from 'dotenv'

import authRoutes from './routes/auth.routes.js';
import { connectToMongo } from './DB/connectToMongo.js';
dotenv.config();

const app = express();

app.use("/api/auth", authRoutes)

app.listen(8081, () => {
    console.log(`Server is running on ${8081}`);
    connectToMongo();
})