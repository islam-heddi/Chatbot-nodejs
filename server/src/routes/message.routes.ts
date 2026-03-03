import {Router} from "express"
import { verifyToken } from "../middlewares/jwt.verify.js"
import { createMessagePrompt, getMessageById, getMessagesByUserId, getMessagesChatId } from "../controller/message.controller.js"

const router = Router()

router.post("/prompt", verifyToken, createMessagePrompt)
router.get("/get/:id", verifyToken, getMessageById)
router.get("/getChatMessage/:chatId", verifyToken, getMessagesChatId)
router.get("/getUserMesage", verifyToken, getMessagesByUserId)

export default router