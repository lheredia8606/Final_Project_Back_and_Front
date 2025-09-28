import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma/index.js";
import { Temporal } from "@js-temporal/polyfill";
import jsonwebtoken from "jsonwebtoken";
import z from "zod";

export const prisma = new PrismaClient();
export const jwtSecret = "super-secret";

const userSchema = z.object({
  id: z.number(),
  email: z.email(),
  firstName: z.string(),
  lastName: z.string(),
  role: z.enum(["client", "worker", "admin"]),
  isActive: z.boolean(),
  iat: z.number(),
});
export interface AuthenticatedRequest extends Request {
  user?: z.infer<typeof userSchema>;
}

export const orderSchema = z.object({
  id: z.coerce.number().int("order id should be a integer"),
  clientId: z.coerce.number().int("client id should be a integer"),
  workerId: z.coerce.number().int("worker id should be a integer"),
  deadLine: z.string(),
  status: z.enum(["in_cart", "ordered", "processing", "ready"]),
  productQty: z.array(
    z.object({
      productId: z.coerce.number().int("product id should be a integer"),
      qty: z.coerce.number().int("product id should be a integer"),
    })
  ),
});

export const orderSchemaPartial = orderSchema
  .omit({ productQty: true })
  .partial()
  .strict();

export interface AuthReqPatchOrder extends AuthenticatedRequest {
  product?: z.infer<typeof orderSchemaPartial>;
}

/**
 * Validate if a token is still valid today (same day as iat).
 *
 * @param iat - issued-at in epoch seconds
 * @param timeZone - optional, defaults to UTC
 * @returns true if valid, false if expired
 */
const isTokenValidToday = (iat: number, timeZone: string = "UTC"): boolean => {
  const issuedDate = Temporal.Instant.fromEpochMilliseconds(iat * 1000)
    .toZonedDateTimeISO(timeZone)
    .toPlainDate();
  const today = Temporal.Now.plainDateISO(timeZone);
  return issuedDate.equals(today);
};

export const isTokenValid = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Unauthorized (no token)" });
  }
  const jwtToken = authHeader.split(" ")[1];
  if (!jwtToken) {
    return res
      .status(401)
      .json({ message: "Unauthorized (malformed header in request)" });
  }
  try {
    const tokenResult = jsonwebtoken.verify(jwtToken, jwtSecret);
    const { success, data: user } = userSchema.safeParse(tokenResult);
    if (!success) {
      return res.status(401).json({ message: "Unauthorized, malformed token" });
    }
    if (!isTokenValidToday(user.iat)) {
      return res.status(401).json({ message: "Unauthorized, token expires" });
    }
    (req as AuthenticatedRequest).user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized, invalid token" });
  }
};
