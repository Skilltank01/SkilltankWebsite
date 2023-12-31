import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

config({
  path: "./Config/config.env",
});
const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

import user from "./Route/userRoutes.js";

import { ErrorMiddleware } from "./Middleware/Error.js";

app.use("/api/v1/", user);

export default app;
app.get("/", (req, res) =>
  res.send(
    `<h1>Skilltank backend site is Working. click <a href=${process.env.FRONTEND_URL}>here</a> to visit skilltank frontend site.</h1>`
  )
);
app.use(ErrorMiddleware);
