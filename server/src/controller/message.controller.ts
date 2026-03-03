import type { Request, Response } from "express"
import { promptMessage, titleMessage } from "../ai/openai.js"
import { Message } from "../models/Message.js"
import { AuthRequest } from "../Types/Request.type.js"
import { Chat } from "../models/Chat.js"

const getMessageById = async (req: Request, res:Response) => {
    const {id} = req.params
    try {
        const message = await Message.findById(id)
        return res.status(200).send(message)
    } catch (error) {
        return res.status(500).send(error)
    }
}

const getMessagesByUserId = async (req: Request, res:Response) => {
    const {userId} = (req as AuthRequest)
    try {
        const result = await Message.find({
            senderId: userId
        })

        return res.status(200).send(result)
    } catch (error) {
        return res.status(500).send(error)
    }
}

const getMessagesChatId = async (req: Request, res: Response) => {
    const {userId} = (req as AuthRequest)
    const {chatId} = req.params
    try {
        const messages = await Message.find({senderId: userId,chatId})
        
        return res.status(200).send(messages)
    } catch (error) {
        return res.status(500).send(error)
    }
}

const createMessagePrompt = async (req:Request, res: Response) => {
    const { userId } = (req as AuthRequest)
    const {chatId,message} = req.body
    try {
        const existChat = await Chat.findById(chatId)
        
        if(!existChat) return res.status(404).send("chat not found")

        const sendMsg = await Message.create({
            senderId: userId,
            content: message,
            chatId,
            role: "User",
        })

        const resultPrompt = await promptMessage(message)

        const result = await Message.create({
            senderId: userId,
            content: resultPrompt,
            chatId,
            role: "System",
        })

        if(existChat.name == "New Chat"){
            const title = await titleMessage(message)
            await Chat.updateOne({_id: chatId}, {name: title})
        }
        
        return res.status(201).send({send: sendMsg,result})
    } catch (error) {
        return res.status(500).send(error)
    }
}

export {createMessagePrompt, getMessagesChatId, getMessagesByUserId, getMessageById}