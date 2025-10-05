import * as z from 'zod';
export const OrdersDeleteResultSchema = z.nullable(z.object({
  id: z.number().int(),
  clientId: z.number().int(),
  client: z.unknown(),
  workerId: z.number().int().optional(),
  worker: z.unknown().optional(),
  deadLine: z.date().optional(),
  status: z.unknown(),
  productQty: z.array(z.unknown())
}));