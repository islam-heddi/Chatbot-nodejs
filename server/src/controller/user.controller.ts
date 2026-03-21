import { Request, Response } from "express";
import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { AuthRequest } from "../Types/Request.type.js";

export const signOut = async (req: Request, res: Response) => {
  try {
    const { userId } = req as AuthRequest;
    if (!userId)
      return res.status(404).send({
        message: "user id not found",
      });
    
    res.clearCookie("token")
    return res.status(200).send("sign out successfully")
  } catch (error) {
    return res.status(500).send({ message: "Error deconnect user",error });
  }
}

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    return res.status(200).send(users);
  } catch (error) {
    return res.status(500).send({ message: "Error fetching users" });
  }
};

export const getAuthUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req as AuthRequest;
    if (!userId)
      return res.status(404).send({
        message: "user id not found",
      });
    const user = await User.findById(userId);
    return res.status(200).send(user);
  } catch (error: any) {
    return res.status(500).send({
      error: "internal error message",
      message: error.message,
    });
  }
};

export const registerUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  try {
    const user = new User({ username, email, password });
    const newUser = await user.save();
    const token = jwt.sign(
      { id: newUser._id },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "1h",
      },
    );
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 3600000,
    });
    return res.status(201).send({ newUser, token });
  } catch (error: any) {
    return res
      .status(500)
      .json({ message: "Error adding users", error: error.message });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: "Email not found" });
    }
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword)
      return res.status(401).send({ message: "Invalid password" });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, {
      expiresIn: "1h",
    });
    res.cookie("token", token);
    return res.status(200).send({ user, token });
  } catch (error: any) {
    return res
      .status(500)
      .json({ message: "Error logging in", error: error.message });
  }
};

export const updateInformation = async (req: Request, res: Response) => {
  const {email, username, password} = req.body;
  try {
    const { userId } = req as AuthRequest;
    if (!userId)
      return res.status(404).send({
        message: "user id not found",
      });
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: "Email not found" });
    }
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword)
      return res.status(401).send({ message: "Invalid password" });
    const result = await User.updateOne({_id: userId}, {email, username})
    
    return res.status(200).send({user: result})
  } catch (error: any) {
    return res
      .status(500)
      .send({ message: "Error to update", error: error.message });  }
}

export const updatePassword = async (req:Request, res:Response) => {
  const { newPassword,oldPassword} = req.body;
  try {
    const { userId } = req as AuthRequest;
    if (!userId)
      return res.status(404).send({
        message: "user id not found",
      });
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send({ message: "Email not found" });
    }
    const checkPassword = await bcrypt.compare(oldPassword, user.password);
    if (!checkPassword)
      return res.status(401).send({ message: "Invalid password" });
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    const result = await User.updateOne({_id: userId}, {password: hashedPassword})
    
    return res.status(200).send({user: result})
  } catch (error: any) {
    return res
      .status(500)
      .send({ message: "Error to update", error: error.message });  }
}