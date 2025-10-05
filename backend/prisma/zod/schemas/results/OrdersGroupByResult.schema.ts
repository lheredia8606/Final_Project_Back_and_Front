import * as z from 'zod';
export const OrdersGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  clientId: z.number().int(),
  workerId: z.number().int(),
  deadLine: z.date(),
  _count: z.object({
    id: z.number(),
    clientId: z.number(),
    client: z.number(),
    workerId: z.number(),
    worker: z.number(),
    deadLine: z.number(),
    status: z.number(),
    productQty: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    clientId: z.number().nullable(),
    workerId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    clientId: z.number().nullable(),
    workerId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    clientId: z.number().int().nullable(),
    workerId: z.number().int().nullable(),
    deadLine: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    clientId: z.number().int().nullable(),
    workerId: z.number().int().nullable(),
    deadLine: z.date().nullable()
  }).nullable().optional()
}));