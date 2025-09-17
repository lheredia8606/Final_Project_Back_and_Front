import {
  AuthenticatedRequest,
  isTokenValid,
  prisma,
} from "../../utils/globals.js";
import { Router } from "express";
import { validateIdParam } from "../generalUtils.js";
import {
  validatePQtyPatchBody,
  validatePQtyPostBody,
} from "./productsQtyUtils.js";
import { Prisma } from "../../../generated/prisma/index.js";

export const prdQtyController = Router();

// prdQtyController.patch(
//   "/productQty/:id",
//   isTokenValid,
//   validateIdParam,
//   validatePQtyPatchBody,
//   async (req, res) => {
//     try {
//       const id = Number(req.params.id);
//       const pQty = req.body;
//       const updatedPQty = await prisma.productQty.update({
//         where: {
//           id,
//         },
//         data: pQty,
//       });
//       return res.status(200).json({ data: updatedPQty });
//     } catch (error) {
//       let message = "Unknown Error";
//       if (error instanceof Prisma.PrismaClientKnownRequestError) {
//         if (error.code === "P2025") {
//           message = "No element found!";
//         } else {
//           message = "Prisma error";
//         }
//       }
//       res.status(404).json({ message });
//     }
//   }
// );

// prdQtyController.delete(
//   "/productQty/:id",
//   isTokenValid,
//   validateIdParam,
//   async (req: AuthenticatedRequest, res) => {
//     const id = Number(req.params.id);
//     try {
//       const pQty = await prisma.productQty.delete({
//         where: {
//           id,
//         },
//       });
//       if (!pQty) {
//         return res.status(404).json({ message: "Not found" });
//       }
//       return res.status(200).json({ data: pQty });
//     } catch (error) {
//       res.status(401).json({ message: error });
//     }
//   }
// );

// prdQtyController.post(
//   "/productQty",
//   isTokenValid,
//   validatePQtyPostBody,
//   async (req, res) => {
//     try {

//       const pQty = await prisma.productQty.create({
//         data: req.body,
//       });
//       return res.status(200).json({ data: pQty });
//     } catch (error) {
//       let message = "Unknown error";
//       if (error instanceof Prisma.PrismaClientKnownRequestError) {
//         message = error.message;
//       }
//       return res.status(401).json({ message });
//     }
//   }
// );
