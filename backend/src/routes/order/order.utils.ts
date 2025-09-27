import { NextFunction, Request, Response } from "express";
import { z, ZodError } from "zod";

const orderModifyProductsParamsSchema = z
  .object({
    orderId: z.coerce.number().int(),
    productId: z.coerce.number().int(),
  })
  .strict();

const orderModifyProductsBodySchema = z
  .object({
    qty: z.number().int(),
  })
  .strict();

export const verifyModifyOrderProductsQuery = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { body, params } = req;
    orderModifyProductsParamsSchema.parse(params);
    orderModifyProductsBodySchema.parse(body);
    next();
  } catch (error) {
    let message = "Unknown error validating the request";
    if (error instanceof ZodError) {
      const parsed = JSON.parse(error.message)[0];
      const path = parsed.path[0] ? `${parsed.path[0]}: ` : "";
      message = `${path}${parsed.message}`;
    }
    return res.status(400).json({ message });
  }
};

const createOrderSchema = z
  .object({
    clientId: z.coerce.number().int("client Id should be a integer"),
    status: z.enum(["in_cart", "ordered", "processing", "ready"]),
  })
  .strict();

export const isPostOrderBodyValid = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    createOrderSchema.parse(req.body);
    next();
  } catch (error) {
    let message = "Unknown error validating the request";
    if (error instanceof ZodError) {
      message = error.issues[0]?.message || "Unknown zod error";
    }
    return res.status(400).json({ message });
  }
};
