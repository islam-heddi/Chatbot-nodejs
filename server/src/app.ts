import express from "express";
import type { Request, Response } from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/db.js";
dotenv.config();
import userRoute from "./routes/user.routes.js";
import chatRoute from "./routes/chat.routes.js"
import cookieParser from "cookie-parser";
import swaggerUI from "swagger-ui-express";
import path from "path";
import YAML from "yamljs";
import aiRoute from "./routes/ai.routes.js"

const documentationFile = YAML.load(path.join("doc", "api.yml"));

const app = express();
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.get("/api/", (_req: Request, res: Response) => {
  res.send("hello islam");
});
app.use("/api/user", userRoute);
app.use("/api/ai", aiRoute);
app.use("/api/chat", chatRoute);
app.use("/api/doc", swaggerUI.serve, swaggerUI.setup(documentationFile));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`the server is listening on ${PORT}`);
  console.log(
    `the documentation is available at http://localhost:${PORT}/api/doc`,
  );
});

export default app;
