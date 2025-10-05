import * as z from 'zod';
export const ProductsCreateManyResultSchema = z.object({
  count: z.number()
});