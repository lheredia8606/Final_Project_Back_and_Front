import { z } from "zod";
import { apiHandler } from "../api/apiHandler";

//globals
export const baseUrl = "http://localhost:3000/";
export const orderApi = apiHandler<TOrder>("orders");
export const userApi = apiHandler<TUser>("users");

export const phoneInputMaxLength = [3, 3, 4];

//types
export const userSchema = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.email(),
  role: z.enum(["client", "worker", "admin"]),
  password: z.string(),
  isActive: z.boolean(),
  phone: z.string(),
});

export type TUser = z.infer<typeof userSchema>;

export const tokenSchema = userSchema
  .omit({ password: true, phone: true })
  .extend({
    iat: z.number().int(),
  });

export type TUserToken = z.infer<typeof tokenSchema>;

export const productSchema = z.object({
  id: z.number(),
  name: z.string(),
  type: z.enum(["mug", "t_shirt", "bag"]),
  image: z.string(),
  inStock: z.boolean(),
  price: z.number(),
});
export type TProduct = z.infer<typeof productSchema>;

export const TOrderProductQtySchema = z.object({
  productId: z.number(),
  qty: z.number(),
});

export type TProductQty = z.infer<typeof TOrderProductQtySchema>;

export const orderSchema = z.object({
  id: z.number(),
  clientId: z.number(),
  workerId: z.number().nullable().optional(),
  deadLine: z.string().nullable().optional(),
  productQty: z.array(TOrderProductQtySchema).optional(),
  status: z.enum(["in_cart", "ordered", "processing", "ready", "done"]),
});
export type TOrder = z.infer<typeof orderSchema>;

export type TOrderStatus = TOrder["status"];

export type TButtonProps = {
  btnText: string;
  navigateTo: string;
};
