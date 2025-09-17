import { apiHandlerThree } from "./apiHandler";
import { z } from "zod";

//globals
export const baseUrl2 = "http://localhost:3002/";
export const baseUrl = "http://localhost:3000/";
export const apiUser = apiHandlerThree<TUser>(baseUrl2, "users");
export const apiProductsThree = apiHandlerThree<TProduct>(baseUrl2, "products");
export const apiOrders = apiHandlerThree<TOrder>(baseUrl2, "orders");
export const phoneInputMaxLength = [3, 3, 4];

//types
export const userSchema = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.email(),
  role: z.enum(["client", "worker", "admin"]),
  iat: z.int(),
});

export type TUser = z.infer<typeof userSchema>;

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.enum(["mug", "t_shirt", "bag"]),
  image: z.string(),
  inStock: z.boolean(),
  price: z.number(),
});
export type TProduct = z.infer<typeof productSchema>;

export type TOrderProductQty = {
  productId: string;
  quantity: number;
};

export const orderSchema = z.object({
  id: z.string(),
  clientId: z.string(),
  workerId: z.string().nullable(),
  deadLine: z.string().nullable(),
  status: z.enum(["in_cart", "ordered", "processing", "ready", "done"]),
});
export type TOrder = z.infer<typeof orderSchema>;

export type TButtonProps = {
  btnText: string;
  navigateTo: string;
};
