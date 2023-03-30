import express from "express";

export const app = express();

import userRouter from "./routes/user.js";

import { config } from "dotenv";

config({
  path: "./data/config.env",
});

app.use(express.json());
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send(`App is working at Port: ${portNumber}`);
});
