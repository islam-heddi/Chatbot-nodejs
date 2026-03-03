import {Router} from "express"
import { postPrompt, titlePrompt } from "../controller/ai.controller.js"

const router = Router()

router.post("/prompt", postPrompt)
router.post("/titlePrompt", titlePrompt)
export default router