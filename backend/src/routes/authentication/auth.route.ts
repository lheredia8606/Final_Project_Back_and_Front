import { Router } from "express";

import { prisma } from "../../utils/globals.js";
import {
  generateJwt,
  isPasswordValid,
  validateLoginBody,
} from "../../utils/authUtils.js";
export const authController = Router();

authController.post("/auth/login", validateLoginBody, async (req, res) => {
  const user = await prisma.user.findFirst({
    where: {
      email: req.body.email,
    },
  });
  if (!user || !(await isPasswordValid(req.body.password, user.passwordHash))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  if (!user.isActive) {
    return res.status(401).json({ message: "Inactive User" });
  }
  return res.status(200).json({ token: generateJwt(user) });
});
