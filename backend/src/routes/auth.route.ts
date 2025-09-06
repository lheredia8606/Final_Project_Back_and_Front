import { Router } from "express";
import { prisma } from "../utils/globals.js";
import {
  generateJwt,
  isPasswordValid,
  validateLoginBody,
} from "../utils/authUtils.js";
export const authController = Router();

authController.post("/auth/login", validateLoginBody, async (req, res) => {
  const user = await prisma.user.findFirst({
    where: {
      email: req.body.email,
    },
  });
  if (!user) {
    return res.status(401).json({ message: "invalid User" });
  }

  if (!(await isPasswordValid(req.body.password, user.passwordHash))) {
    return res.status(401).json({ message: "invalid password" });
  }
  return res.status(200).json({ token: generateJwt(user) });
});
