import express from "express";
import { updateUser } from "../controllers/user.controler.js";
import { verifyToken } from "../utils.js/verifyUser.js";
const router = express.Router();

router.put("/update/:userId", verifyToken, updateUser);

export default router;
