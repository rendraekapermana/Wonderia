import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
const corsOptions = {
  origin: "http://localhost:5173",
};
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from MongoDB");
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
  res.json({ fruits: ["apple", "banana", "orange"] });
});

app.listen(8080, () => {
  connect();
  console.log("Connected to backend with server on port 8080");
});
