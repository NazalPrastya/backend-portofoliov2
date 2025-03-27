import { Request, Response } from "express";
import ProjectController from "./project/project.controller";

const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const port = process.env.PORT;

app.use(express.json());

// Routes
// app.use("/api", ProjectController);
app.use("/api", ProjectController);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
