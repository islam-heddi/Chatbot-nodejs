import express from "express"
import type { Request, Response } from "express"
import dotenv from "dotenv"
import { connectDB } from "./db/db.js"
dotenv.config()
import userRoute from "./routes/user.routes.js"
import cookieParser from "cookie-parser"

const app = express()
connectDB()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.get("/api/", (_req: Request, res: Response) => {
    res.send("hello islam");
})
app.use("/api/user", userRoute)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`the server is listening on ${PORT}`))

export default app