import { NextFunction, Request, Response } from "express";
import { z, ZodError } from "zod";

const productQtyPatchBodySchema = z
  .object({
    orderId: z.number().optional(),
    productId: z.number().optional(),
    qty: z.number().optional(),
  })
  .strict();

const productQtyPostBodySchema = z
  .object({
    orderId: z.number(),
    productId: z.number(),
    qty: z.number(),
  })
  .strict();

export const validatePQtyPatchBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    productQtyPatchBodySchema.parse(req.body);
    next();
  } catch (error) {
    let message = "Unknown error";
    if (error instanceof ZodError) {
      message = error.issues[0]?.message ?? "Invalid body";
    }
    return res.status(400).json({ message });
  }
};

export const validatePQtyPostBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    productQtyPostBodySchema.parse(req.body);
    next();
  } catch (error) {
    let message = "Invalid body payload";
    if (error instanceof ZodError) {
      const zodError = JSON.parse(error.message)[0];
      const isPath = zodError.path[0] ? `${zodError.path[0]}: ` : "";
      message = `${isPath}${zodError.message}`;
    }
    return res.status(400).json({ message });
  }
};
