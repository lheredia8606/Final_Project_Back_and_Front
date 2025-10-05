import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  clientId: z.literal(true).optional(),
  workerId: z.literal(true).optional(),
  deadLine: z.literal(true).optional(),
  status: z.literal(true).optional()
}).strict();
export const OrdersMinAggregateInputObjectSchema: z.ZodType<Prisma.OrdersMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OrdersMinAggregateInputType>;
export const OrdersMinAggregateInputObjectZodSchema = makeSchema();
