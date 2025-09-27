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
  async (req: AuthenticatedRequest, res) => {
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
  }
);

productController.post(
  "/products",
  isTokenValid,
  isPostBodyValid,
  async (req, res) => {
    try {
      const { type, name, inStock, image, price } = req.body;
      const product = await prisma.products.create({
        data: {
          image,
          type,
          name,
          inStock,
          price,
        },
      });
      return res.status(201).json({ data: product });
    } catch (error) {
      let message = "Unknown error";
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          return res.status(409).json({
            message: `A Product with that ${error.meta?.target} already exist`,
          });
        }
        message = error.message;
      } else if (error instanceof Error) {
        message = error.message;
      }
      return res.status(500).json({ message });
    }
  }
);

productController.delete(
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
        if (error.code === "P2025") {
          return res.status(404).json({ message: "Product Not found!!!" });
        }
        message = error.message;
      } else if (error instanceof Error) {
        message = error.message;
      }
      return res.status(500).json({ message });
    }
  }
);

productController.patch(
  "/products/:id",
  isTokenValid,
  validateIdParam,
  isProductPatchBodyValid,
  async (req, res) => {
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
      let message = "Unknown error";
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          message = "Unique constraint failed in one or more fields";
        } else {
          message = "Unknown prisma error";
        }
      }
      return res.status(400).json({ message });
    }
  }
);
