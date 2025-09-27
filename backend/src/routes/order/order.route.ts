import { Router } from "express";
import {
  AuthenticatedRequest,
  isTokenValid,
  prisma,
} from "../../utils/globals.js";
import { Prisma } from "../../../generated/prisma/index.js";
import { validateIdParam } from "../generalUtils.js";
import {
  isPostOrderBodyValid,
  verifyModifyOrderProductsQuery,
} from "./order.utils.js";

export const orderController = Router();

orderController.delete(
  "/products/:id",
  isTokenValid,
  validateIdParam,
  async (req: AuthenticatedRequest, res) => {
    try {
      const { id } = req.params;
      const product = await prisma.products.delete({
        where: { id: Number(id) },
      });
      return res.status(200).json({ data: product });
    } catch (error) {
      let message = "Unknown error";
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        console.log({ error });

        message = error.message;
      } else if (error instanceof Error) {
        message = error.message;
      }
      return res.status(401).json({ message });
    }
  }
);

/**
 * @queryParams orderId: int, productId: Int
 * @queryBody {qty: int}
 * Change the qty of a product in a order,
 * If product already exist modify the qty and if result qty is less than 1, erase the product from the order
 * if don't, add the product to the order
 */
orderController.post(
  "/orders/:orderId/products/:productId",
  isTokenValid,
  verifyModifyOrderProductsQuery,
  async (req: AuthenticatedRequest, res) => {
    try {
      const orderId = Number(req.params.orderId);
      const productId = Number(req.params.productId);
      const qty = req.body.qty;
      const product = await prisma.productQty.upsert({
        where: {
          orderId_productId: { orderId, productId },
        },
        update: {
          qty: {
            increment: qty,
          },
        },
        create: {
          orderId,
          productId,
          qty,
        },
      });
      if (product.qty <= 0) {
        await prisma.productQty.delete({
          where: {
            id: product.id,
          },
        });
      }
      return res.status(200).json({ data: product });
    } catch (error) {
      let message = "Unknown Error";
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        console.log({ message: error.stack });
        message = error.message;
      }
      return res.status(400).json({ message });
    }
  }
);

orderController.post(
  "/orders/",
  isTokenValid,
  isPostOrderBodyValid,
  async (req: AuthenticatedRequest, res) => {
    try {
      const { clientId, status } = req.body;
      const { id, role } = req.user!;
      if (clientId !== id && role !== "admin") {
        return res
          .status(403)
          .json({ message: "Unauthorized to create orders for other users" });
      }
      const order = await prisma.orders.create({
        data: {
          clientId,
          status,
        },
      });
      res.status(200).json({ data: order });
    } catch (error) {
      let message = "Unknown error creating order";
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        message = `Prisma error creating order code ${error.code}`;
      }
      res.status(404).json({ message });
    }
  }
);

orderController.get(
  "/orders/",
  isTokenValid,
  async (req: AuthenticatedRequest, res) => {
    try {
      if (req.user?.role !== "admin") {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const orders = await prisma.orders.findMany();
      return res.status(200).json({ data: orders });
    } catch (error) {
      let message = "Unknown Error Fetching all orders";
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        message = error.message;
      }
      return res.status(404).json({ message });
    }
  }
);
