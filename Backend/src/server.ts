import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./routes/authRoutes";



dotenv.config();

const app = express();

// Middlewars 
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send("Api is running...");
});

// Handling routes
app.use("/api/auth", authRouter);
app.use("/api/user", authRouter);


// MonogoDB Connection
mongoose.connect(process.env.MONGO_URI as string).then(() => {
  console.log("MongoDB Connected");
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
  })
}).catch((err) => console.log("Error while connecting to MongoDB", err));