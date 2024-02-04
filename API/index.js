import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRoutes from "./routes/user.route.js";
import aurhRoutes from "./routes/auth.route.js";

dotenv.config();

const PORT = 3000;

const app = express();
app.use(express.json());
mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Mango db Connected!"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server start at port ${PORT}!`);
});

app.use("/api/user", userRoutes);
app.use("/api/auth", aurhRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
