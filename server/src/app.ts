import express from "express"
import type { Request, Response } from "express"
import dotenv from "dotenv"
import { connectDB } from "./db/db.js"
dotenv.config()

const app = express()
connectDB()
app.get("/", (_req: Request, res: Response) => {
    res.send("hello islam");
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`the server is listening on ${PORT}`))

export default app