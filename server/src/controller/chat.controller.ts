import type {Request, Response} from 'express'
import { AuthRequest } from '../Types/Request.type.js'
import {Chat} from "../models/Chat.js"
const createChat = async (req: Request, res: Response) => {
    const {userId} = (req as AuthRequest)
    if(!userId) return res.status(404).send("user id not found, please login again to continue")
    try {
        const result = await Chat.create({
            userId
        })
        return res.status(201).send(result)
    } catch (error) {
        return res.status(500).send(error)
    }
}

const getChatsByUserId = async (req: Request, res: Response) => {
    const {userId} = (req as AuthRequest)
    if(!userId) return res.status(404).send("user id not found, please login again to continue")
    try {
        const result = await Chat.find({userId})
        return res.status(200).send(result)
    } catch (error) {
        return res.status(500).send(error)
    }
}

const updateChatByUserId = async (req: Request, res: Response) => {
    const {userId} = (req as AuthRequest)
    const {id,name} = req.body
    if(!userId) return res.status(404).send("user id not found, please login again to continue")
    try {
        const result = await Chat.updateMany({_id:id,userId}, {name})
        return res.status(200).send(result)
    } catch (error) {
        return res.status(500).send(error)
    }
}

const deleteChat = async (req: Request, res: Response) => {
    const {userId} = (req as AuthRequest)
    const {id} = req.params
    if(!userId) return res.status(404).send("user id not found, please login again to continue")
    try {
        const checkChatExists = await Chat.find({_id: id, userId})
        if(!checkChatExists) return res.status(400).send("chats not found")
        await Chat.deleteOne({_id: id, userId})
        return res.status(200).send("chat deleted")
    } catch (error) {
        return res.status(500).send(error)
    }
}

export {createChat, getChatsByUserId, updateChatByUserId, deleteChat}