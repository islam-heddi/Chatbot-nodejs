import {
  registerUser,
  getAllUsers,
  loginUser,
  getAuthUser,
} from "../controller/user.controller.js";
import { Router } from "express";
import { verifyToken } from "../middlewares/jwt.verify.js";

const router = Router();

router.get("/", getAllUsers);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getAuth", verifyToken, getAuthUser);

export default router;
