import express from "express";
const router = express.Router();

import { getProjects } from "./project.service";

router.get("/projects", async (req, res) => {
  const projects = await getProjects();
  res.json({
    message: "Data project Success",
    data: projects,
  });
});

export default router;
