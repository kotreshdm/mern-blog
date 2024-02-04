import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRoutes from "./routes/user.route.js";

dotenv.config();

const PORT = 3000;

const app = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Mango db Connected!"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server start at port ${PORT}!`);
});

app.use("/api/user", userRoutes);
