import * as z from 'zod';
export const ProductsFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  type: z.unknown(),
  name: z.string(),
  inStock: z.boolean(),
  image: z.string(),
  price: z.number(),
  productQty: z.array(z.unknown())
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});