import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { productController } from "./routes/product/products.route.js";
import { userController } from "./routes/user/users.route.js";
import { orderController } from "./routes/order/order.route.js";
import { ZodError } from "zod";
import { Prisma } from "../generated/prisma/index.js";
const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello hello");
});
app.use(userController);
app.use(productController);
app.use(orderController);

//error handler
app.use((error: unknown, _req: Request, res: Response, _next: NextFunction) => {
  if (error instanceof ZodError) {
    return res
      .status(400)
      .json({ message: `Validation failed: ${error.issues[0]?.message}` });
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    return res
      .status(500)
      .json({ message: `${error.message}, code: ${error.code}` });
  }

  const message = error instanceof Error ? error.message : "Unknown error";
  return res.status(500).json({ message });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
