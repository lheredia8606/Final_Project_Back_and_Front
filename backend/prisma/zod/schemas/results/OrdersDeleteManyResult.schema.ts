import * as z from 'zod';
export const OrdersDeleteManyResultSchema = z.object({
  count: z.number()
});