import * as z from 'zod';
export const ProductsFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  type: z.unknown(),
  name: z.string(),
  inStock: z.boolean(),
  image: z.string(),
  price: z.number(),
  productQty: z.array(z.unknown())
}));