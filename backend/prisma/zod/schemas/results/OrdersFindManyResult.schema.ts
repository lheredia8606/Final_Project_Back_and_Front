import * as z from 'zod';
export const OrdersFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  clientId: z.number().int(),
  client: z.unknown(),
  workerId: z.number().int().optional(),
  worker: z.unknown().optional(),
  deadLine: z.date().optional(),
  status: z.unknown(),
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