import { Router } from "express";
import {
  AuthenticatedRequest,
  AuthReqPatchOrder,
  isTokenValid,
  prisma,
} from "../../utils/globals.js";
import { Prisma } from "../../../generated/prisma/index.js";
import { validateIdParam } from "../generalUtils.js";
import {
  isPatchBodyValid,
  isPostOrderBodyValid,
  verifyModifyOrderProductsQuery,
} from "./order.utils.js";

export const orderController = Router();

orderController.delete(
  "/products/:id",
  isTokenValid,
  validateIdParam,
  async (req: AuthenticatedRequest, res, next) => {
    try {
      const { id } = req.params;
      const product = await prisma.products.delete({
        where: { id: Number(id) },
      });
      return res.status(200).json({ data: product });
    } catch (error) {
      next(error);
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
  async (req: AuthenticatedRequest, res, next) => {
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
      next(error);
    }
  }
);

orderController.post(
  "/orders/",
  isTokenValid,
  isPostOrderBodyValid,
  async (req: AuthenticatedRequest, res, next) => {
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
      next(error);
    }
  }
);

orderController.get(
  "/orders/",
  isTokenValid,
  async (req: AuthenticatedRequest, res, next) => {
    try {
      if (req.user?.role !== "admin") {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const orders = await prisma.orders.findMany();
      return res.status(200).json({ data: orders });
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @queryBody A partial TOrder object excluding `id` and `productQty`.
 * @queryParams The ID of the order to be patched.
 *
 * Modifies an order in the database.
 */
orderController.patch(
  "/orders/:orderId",
  isTokenValid,
  isPatchBodyValid,
  async (req: AuthReqPatchOrder, res, next) => {
    const orderId = Number(req.params.orderId);
    const { role, id: userId } = req.user!;
    const { id, ...incomingOrder } = req.product!;
    incomingOrder.deadLine = incomingOrder.deadLine
      ? `${incomingOrder.deadLine}T00:00:00.000Z`
      : undefined;
    const cleanedData = Object.fromEntries(
      Object.entries(incomingOrder).filter(([_, value]) => value !== undefined)
    );

    try {
      const order = await prisma.orders.findFirst({
        where: {
          id: orderId,
        },
      });
      if (!order) {
        return res.status(404).json({ message: "No order found!" });
      }
      if (order.clientId !== userId && role === "client") {
        return res
          .status(403)
          .json({ message: "A client only can change his own orders!" });
      }
      const patchedOrder = await prisma.orders.update({
        where: {
          id: orderId,
        },
        data: {
          ...cleanedData,
        },
      });
      return res.status(200).json({ data: patchedOrder });
    } catch (error) {
      next(error);
    }
  }
);
