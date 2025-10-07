import { Router } from "express";
import { Orders, Role } from "../../../generated/prisma/index.js";

import {
  AuthenticatedRequest,
  isTokenValid,
  prisma,
} from "../../utils/globals.js";
import {
  generateJwt,
  getPasswordHash,
  isPasswordValid,
  validateCreateUserBody,
  validateGetUsers,
  validateLoginBody,
} from "./user.utils.js";
export const userController = Router();

userController.post(
  "/users",
  validateCreateUserBody,
  async (req, res, next) => {
    try {
      const password = await getPasswordHash(req.body.password);
      console.log({ password });

      const user = await prisma.user.create({
        data: { ...req.body, password },
      });
      console.log(user);

      return res.status(200).json({ data: user });
    } catch (error) {
      next(error);
    }
  }
);

userController.post(
  "/users/login",
  validateLoginBody,
  async (req, res, next) => {
    try {
      const user = await prisma.user.findFirst({
        where: {
          email: req.body.email,
        },
      });
      if (!user || !(await isPasswordValid(req.body.password, user.password))) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      if (!user.isActive) {
        return res.status(401).json({ message: "Inactive User" });
      }
      return res.status(200).json({ token: generateJwt(user) });
    } catch (error) {
      next(error);
    }
  }
);

/**
 * Retrieves users based on userRole passed as queryParams:
 * if undefined retrieves all users
 *
 * @queryParams userRole: admin | worker | client | undefined
 */
userController.get(
  "/users",
  isTokenValid,
  validateGetUsers,
  async (req: AuthenticatedRequest, res, next) => {
    try {
      const { userRole } = req.query;
      const userRoleParam = Array.isArray(userRole) ? userRole[0] : userRole;

      const role: Role | undefined =
        userRoleParam && Object.values(Role).includes(userRoleParam as Role)
          ? (userRoleParam as Role)
          : undefined;

      const where = role ? { role } : {};
      const users = await prisma.user.findMany({
        where,
      });
      return res.status(200).json({ data: users });
    } catch (error) {
      next(error);
    }
  }
);

/**
 * Retrieves orders based on the user’s role:
 * - Client: receives only their own orders
 * - Worker: receives orders assigned to them plus unassigned orders
 * - Admin: receives all orders
 */
userController.get(
  "/user/orders",
  isTokenValid,
  async (req: AuthenticatedRequest, res, next) => {
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
      next(error);
    }
  }
);

userController.get(
  "/user/orders/myCart",
  isTokenValid,
  async (req: AuthenticatedRequest, res, next) => {
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
      next(error);
    }
  }
);
