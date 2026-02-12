import { Request, Response } from "express";
import { User } from "../models/User.js";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find()
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json({ message: "Error fetching users" })
    }
}

export const registerUser = async (req: Request, res: Response) => {
    const { username, email, password } = req.body
    try {
        const user = new User({ username, email, password })
        await user.save()
        return res.status(201).json(user)
    } catch (error) {
        return res.status(500).json({ message: "Error adding users", error })
    }

}