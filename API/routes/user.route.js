import express from "express";
import {
  updateUser,
  deleteUser,
  signout,
} from "../controllers/user.controler.js";
import { verifyToken } from "../utils.js/verifyUser.js";
const router = express.Router();

router.put("/update/:userId", verifyToken, updateUser);
router.delete("/delete/:userId", verifyToken, deleteUser);
router.post("/signout", signout);

export default router;
