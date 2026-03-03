import { Request, Response } from "express"
import { promptMessage, titleMessage } from "../ai/openai.js"

export const postPrompt = async (req: Request, res: Response) => {
    const {message} = req.body
    try {
        const chatMsg = await promptMessage(message)
        return res.status(200).send(chatMsg)
    } catch (error) {
        return res.status(500).send(error)
    }
}

export const titlePrompt = async (req: Request, res: Response) => {
    const {message} = req.body
    try {
        const chatMsg = await titleMessage(message)
        return res.status(200).send(chatMsg)
    } catch (error) {
        return res.status(500).send(error)
    }
}