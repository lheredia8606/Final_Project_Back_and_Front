import { Prisma } from "../../../generated/prisma/index.js";

import { Router } from "express";
import {
  AuthenticatedRequest,
  isTokenValid,
  prisma,
} from "../../utils/globals.js";
import {
  isGetQueryValid,
  isPostBodyValid,
  isProductPatchBodyValid,
} from "./product.utils.js";
import { validateIdParam } from "../generalUtils.js";
export const productController = Router();

productController.get(
  "/products",
  isGetQueryValid,
  async (req: AuthenticatedRequest, res, next) => {
    try {
      const { inStock } = req.query;
      let whereClause = {};
      if (inStock != undefined) {
        whereClause = {
          inStock: inStock === "true",
        };
      }
      const products = await prisma.products.findMany({
        where: whereClause,
      });
      return res.status(200).json({ data: products });
    } catch (error) {
      next(error);
    }
  }
);

productController.post(
  "/products",
  isTokenValid,
  isPostBodyValid,
  async (req, res, next) => {
    try {
      const product = await prisma.products.create({
        data: req.body,
      });
      return res.status(201).json({ data: product });
    } catch (error) {
      next(error);
    }
  }
);

productController.delete(
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

productController.patch(
  "/products/:id",
  isTokenValid,
  validateIdParam,
  isProductPatchBodyValid,
  async (req, res, next) => {
    try {
      const id = Number(req.params.id);
      const patched = await prisma.products.update({
        where: {
          id,
        },
        data: req.body,
      });
      return res.status(200).json({ message: patched });
    } catch (error) {
      next(error);
    }
  }
);
