import * as z from 'zod';
export const ProductsDeleteManyResultSchema = z.object({
  count: z.number()
});