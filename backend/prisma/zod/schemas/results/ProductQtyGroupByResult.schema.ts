import * as z from 'zod';
export const ProductQtyGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  orderId: z.number().int(),
  productId: z.number().int(),
  qty: z.number().int(),
  _count: z.object({
    id: z.number(),
    orderId: z.number(),
    productId: z.number(),
    qty: z.number(),
    order: z.number(),
    product: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    orderId: z.number().nullable(),
    productId: z.number().nullable(),
    qty: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    orderId: z.number().nullable(),
    productId: z.number().nullable(),
    qty: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    orderId: z.number().int().nullable(),
    productId: z.number().int().nullable(),
    qty: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    orderId: z.number().int().nullable(),
    productId: z.number().int().nullable(),
    qty: z.number().int().nullable()
  }).nullable().optional()
}));