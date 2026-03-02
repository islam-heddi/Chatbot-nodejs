import {Router} from "express"
import { createChat, deleteChat, getChatsByUserId, updateChatByUserId } from "../controller/chat.controller.js"
import { verifyToken } from "../middlewares/jwt.verify.js";

const router = Router()

router.get("/get",verifyToken, getChatsByUserId)
router.post("/create", verifyToken, createChat)
router.patch("/update", verifyToken, updateChatByUserId)
router.delete("/delete/:id", verifyToken, deleteChat)

export default router