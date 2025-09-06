import { Router } from "express";
import {
  AuthenticatedRequest,
  isTokenValid,
  prisma,
} from "../utils/globals.js";

export const productController = Router();

productController.get(
  "/products",
  isTokenValid,
  async (req: AuthenticatedRequest, res) => {
    const products = await prisma.products.findMany({
      where: {
        inStock: true,
      },
    });
    return res.status(200).json({ products });
  }
);
