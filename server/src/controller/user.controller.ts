import { Request, Response } from "express";
import { User } from "../models/User.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

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
        const newUser = await user.save()
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" })
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 3600000
        })
        return res.status(201).json({ newUser, token })
    } catch (error) {
        return res.status(500).json({ message: "Error adding users", error: error.message })
    }
}

export const loginUser = async (req: Request, res: Response) => {
    const { username, password } = req.body
    try {
        const user = await User.findOne({ username })
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        const checkPassword = await bcrypt.compare(user.password, password)

        if (!checkPassword) return res.status(401).json({ message: "Invalid password" })
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" })
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 3600000
        })
        return res.status(200).json({ user, token })
    } catch (error) {
        return res.status(500).json({ message: "Error logging in", error: error.message })
    }
}