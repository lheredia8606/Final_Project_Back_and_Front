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
    let errorMessage = "Unknown Zod Error";
    if (error.issues[0]) {
      const { path, message } = error.issues[0];
      errorMessage = `${path}:${message}`;
    }
    console.log("zod error");
    return res.status(400).json({
      message: `Validation failed: ${errorMessage}`,
    });
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    let message = error.message;
    if (error.code === "P2002") {
      message = `This ${error.meta?.target} is already in use. Please use a different one`;
    }
    console.log("prisma error");
    return res.status(500).json({
      message: `${message}`,
      prismaErrorCode: `${error.code}`,
    });
  }
  const message = error instanceof Error ? error.message : "Unknown error";
  console.log("unknown error");
  return res.status(500).json({ message });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
