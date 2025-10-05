import * as z from 'zod';
export const OrdersCreateManyResultSchema = z.object({
  count: z.number()
});