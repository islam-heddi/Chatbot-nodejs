import { registerUser, getAllUsers } from "../controller/user.controller.js";
import { Router } from "express"

const router = Router();

router.get("/", getAllUsers)
router.post("/register", registerUser)

export default router