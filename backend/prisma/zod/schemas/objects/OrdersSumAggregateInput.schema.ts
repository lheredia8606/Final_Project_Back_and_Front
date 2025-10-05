import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  clientId: z.literal(true).optional(),
  workerId: z.literal(true).optional()
}).strict();
export const OrdersSumAggregateInputObjectSchema: z.ZodType<Prisma.OrdersSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OrdersSumAggregateInputType>;
export const OrdersSumAggregateInputObjectZodSchema = makeSchema();
