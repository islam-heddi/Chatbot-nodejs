import {
  registerUser,
  getAllUsers,
  loginUser,
  getAuthUser,
  signOut,
  updatePassword,
  updateInformation,
} from "../controller/user.controller.js";
import { Router } from "express";
import { verifyToken } from "../middlewares/jwt.verify.js";

const router = Router();

router.get("/", getAllUsers);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getAuth", verifyToken, getAuthUser);
router.delete("/signout", verifyToken, signOut)
router.patch("/updatePassword", verifyToken, updatePassword)
router.patch("/updateInformation", verifyToken, updateInformation)

export default router;
