import jwt, { JwtPayload } from "jsonwebtoken";
import { Response, NextFunction } from "express";
import { AuthRequest } from "../Types/Request.type.js";
import { Request } from "express";

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token =
      req.cookies?.token || req.headers["authorization"]?.split(" ")[1];
    if (!token || token == undefined)
      return res.status(404).json({
        error: "authentification error",
        message: "Token not found",
      });
    const decoded: JwtPayload = jwt.verify(
      token,
      process.env.JWT_SECRET as string,
    ) as JwtPayload;
    if (!decoded)
      return res.json(400).json({
        error: "authenification error",
        message: "token expired",
      });
    (req as AuthRequest).userId = decoded.id;
    next();
  } catch (error: any) {
    return res.status(500).json({
      error: "internal error server",
      message: error.message,
    });
  }
};

export { verifyToken };
