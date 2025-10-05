import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  clientId: z.literal(true).optional(),
  workerId: z.literal(true).optional(),
  deadLine: z.literal(true).optional(),
  status: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const OrdersCountAggregateInputObjectSchema: z.ZodType<Prisma.OrdersCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OrdersCountAggregateInputType>;
export const OrdersCountAggregateInputObjectZodSchema = makeSchema();
