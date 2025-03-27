import { createUser } from "./user.service";

const express = require("express");
const router = express.Router();

router.post("/user", (req: Request, res: Response) => {
  const reqBody = req.body;
  const newUser = createUser(reqBody);
});

export default router;
