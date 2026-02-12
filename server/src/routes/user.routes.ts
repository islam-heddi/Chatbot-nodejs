import { registerUser, getAllUsers, loginUser } from "../controller/user.controller.js";
import { Router } from "express"

const router = Router();

router.get("/", getAllUsers)
router.post("/register", registerUser)
router.post("/login", loginUser)

export default router