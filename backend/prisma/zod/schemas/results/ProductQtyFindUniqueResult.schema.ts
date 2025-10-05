import * as z from 'zod';
export const ProductQtyFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  orderId: z.number().int(),
  productId: z.number().int(),
  qty: z.number().int(),
  order: z.unknown(),
  product: z.unknown()
}));