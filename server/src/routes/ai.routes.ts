import {Router} from "express"
import { postPrompt } from "../controller/ai.controller.js"

const router = Router()

router.post("/prompt", postPrompt)

export default router