import express from "express";
import type { Request, Response } from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/db.js";
dotenv.config();
import userRoute from "./routes/user.routes.js";
import chatRoute from "./routes/chat.routes.js";
import messageRoute from "./routes/message.routes.js"
import cookieParser from "cookie-parser";
import swaggerUI from "swagger-ui-express";
import path from "path";
import YAML from "yamljs";
import aiRoute from "./routes/ai.routes.js"
import cors from "cors"

const documentationFile = YAML.load(path.join("doc", "api.yml"));

const app = express();
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
  origin: process.env.VIEW_LINK,
  methods: ["GET","POST","PATCH","PUT","DELETE"],
  credentials: true
}))
app.get("/api/", (_req: Request, res: Response) => {
  res.send("Your app is healthy");
});
app.use("/api/user", userRoute);
app.use("/api/ai", aiRoute);
app.use("/api/chat", chatRoute);
app.use("/api/message", messageRoute);
app.use("/api/doc", swaggerUI.serve, swaggerUI.setup(documentationFile));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`the server is listening on ${PORT}`);
  console.log(
    `the documentation is available at http://localhost:${PORT}/api/doc`,
  );
  console.log(`the view is on ${process.env.VIEW_LINK}`)
});

export default app;
