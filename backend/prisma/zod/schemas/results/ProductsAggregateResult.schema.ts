import * as z from 'zod';
export const ProductsAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    type: z.number(),
    name: z.number(),
    inStock: z.number(),
    image: z.number(),
    price: z.number(),
    productQty: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    price: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    price: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    image: z.string().nullable(),
    price: z.number().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    image: z.string().nullable(),
    price: z.number().nullable()
  }).nullable().optional()});