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
