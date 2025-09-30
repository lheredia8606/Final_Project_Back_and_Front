import { Router } from "express";
import { Orders, Prisma } from "../../../generated/prisma/index.js";

import {
  AuthenticatedRequest,
  isTokenValid,
  prisma,
} from "../../utils/globals.js";
import {
  generateJwt,
  isPasswordValid,
  validateLoginBody,
} from "./user.utils.js";
export const userController = Router();

userController.post("/users/login", validateLoginBody, async (req, res) => {
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

/**
 * Retrieves orders based on the user’s role:
 * - Client: receives only their own orders
 * - Worker: receives orders assigned to them plus unassigned orders
 * - Admin: receives all orders
 */
userController.get(
  "/user/orders",
  isTokenValid,
  async (req: AuthenticatedRequest, res) => {
    try {
      const { id, role } = req.user!;
      let orders: Orders[];
      if (role === "client") {
        orders = await prisma.orders.findMany({
          where: {
            clientId: id,
          },
          include: {
            productQty: {
              include: {
                product: true,
              },
            },
          },
        });
      } else if (role === "worker") {
        orders = await prisma.orders.findMany({
          where: {
            OR: [{ workerId: id }, { status: "ordered" }],
          },
          include: {
            productQty: {
              include: {
                product: true,
              },
            },
          },
        });
      } else {
        orders = await prisma.orders.findMany();
      }
      return res.status(200).json({ data: orders });
    } catch (error) {
      let message = "Unknown error";
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        message = `Prisma error code ${error.code}`;
      }
      return res.status(400).json({ message });
    }
  }
);

userController.get(
  "/user/orders/myCart",
  isTokenValid,
  async (req: AuthenticatedRequest, res) => {
    try {
      const { id } = req.user!;

      const cart = await prisma.orders.findFirst({
        where: {
          clientId: id,
          status: "in_cart",
        },
        include: {
          productQty: {
            include: {
              product: true,
            },
          },
        },
      });
      return res.status(200).json({ data: cart });
    } catch (error) {
      let message = "Unknown error";
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        message = `Prisma error code ${error.code}`;
      }
      return res.status(400).json({ message });
    }
  }
);
