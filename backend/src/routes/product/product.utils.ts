import { NextFunction, Request, Response } from "express";
import { z, ZodError } from "zod";

const productSchema = z.object({
  type: z.enum(["bag", "mug", "t_Shirt"]),
  name: z.string(),
  inStock: z.boolean(),
  image: z.string(),
  price: z.float32(),
});

export const isGetQueryValid = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const reqBody = z.object({
    inStock: z.enum(["true", "false"]).optional(),
  });
  try {
    reqBody.parse(req.query);
    next();
  } catch (error) {
    return res.status(400).json({ message: "Invalid query params" });
  }
};

export const isPostBodyValid = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = productSchema.parse(req.body);
    next();
  } catch (e) {
    next(e);
  }
};

const patchBodySchema = z
  .object({
    type: z.enum(["bag", "mug", "t_Shirt"]).optional(),
    name: z.string().optional(),
    inStock: z.boolean().optional(),
    image: z.string().optional(),
    price: z.float32().optional(),
  })
  .strict();
export const isProductPatchBodyValid = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    patchBodySchema.parse(req.body);
    next();
  } catch (error) {
    next(error);
  }
};
