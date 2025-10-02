import { NextFunction, Request, Response } from "express";
import z from "zod";

const paramsSchema = z.object({
  id: z.coerce.number(),
});
export const validateIdParam = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    paramsSchema.parse(req.params);
    next();
  } catch (e) {
    next(e);
  }
};
