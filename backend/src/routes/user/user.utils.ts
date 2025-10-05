import { hash, compare } from "bcrypt";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import jwt from "jsonwebtoken";
import { Role, User } from "../../../generated/prisma/index.js";
import { jwtSecret } from "../../utils/globals.js";
import { UserCreateResultSchema } from "../../../prisma/zod/schemas/results/UserCreateResult.schema.js";

export const getPasswordHash = async (password: string) => {
  return await hash(password, 11);
};

export const isPasswordValid = async (
  password: string,
  passwordHash: string
) => {
  return await compare(password, passwordHash);
};

export const generateJwt = ({
  id,
  email,
  firstName,
  lastName,
  role,
  isActive,
}: User) => {
  const unsecuredUserInfo = {
    id,
    email,
    firstName,
    lastName,
    role,
    isActive,
  };
  return jwt.sign(unsecuredUserInfo, jwtSecret);
};

export const verifyJwt = (token: string) => {
  return jwt.verify(token, jwtSecret);
};

const loginBodySchema = z
  .object({
    email: z.email(),
    password: z.string(),
  })
  .strict();

export const validateLoginBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = loginBodySchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ message: "Invalid request body" });
  }
  req.body = result.data;
  next();
};

const userOrdersSchema = z
  .object({
    userId: z.coerce.number().int("userId must be a integer"),
  })
  .strict();
export const validateUserOrdersParams = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    userOrdersSchema.parse(req.params);
    next();
  } catch (error) {
    next(error);
  }
};

const getUserReqSchema = z
  .object({
    userRole: z.enum(Role).optional(),
  })
  .strict();

export const validateGetUsers = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    getUserReqSchema.parse(req.query);
    next();
  } catch (error) {
    next(error);
  }
};

export const validateCreateUserBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const createUserSchema = UserCreateResultSchema.partial({
      id: true,
      clientOrders: true,
      workerOrders: true,
    });
    createUserSchema.parse(req.body);
    next();
  } catch (error) {
    next(error);
  }
};
