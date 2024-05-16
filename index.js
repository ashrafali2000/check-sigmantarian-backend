import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";
import cors from "cors";

dotenv.config();
const DbPassword = process.env.USER_PASSWORD;
mongoose
  .connect(
    `mongodb+srv://bawdicsoft:${DbPassword}@cluster0.felwzd8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log("DataBase is connected--->");
  })
  .catch((err) => {
    console.log("err------>", err);
  });
const app = express();
app.use(cors());
app.use(express.json());

app.listen(5001, () => {
  console.log("Server is running on Port 3000");
});

app.use("/user", userRoutes);

app.get("/", function (req, res) {
  res.send("Server is running...");
});
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({ success: false, statusCode, message });
});
