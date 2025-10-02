import { NextFunction, Request, Response } from "express";
import { z, ZodError } from "zod";
import { AuthReqPatchOrder, orderSchemaPartial } from "../../utils/globals.js";

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
    next(error);
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
    next(error);
  }
};

export const isPatchBodyValid = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const parsedBody = orderSchemaPartial.parse(req.body);
    (req as AuthReqPatchOrder).product = parsedBody;
    next();
  } catch (error) {
    next(error);
  }
};
