import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional(),
  workerId: SortOrderSchema.optional()
}).strict();
export const OrdersSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OrdersSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrdersSumOrderByAggregateInput>;
export const OrdersSumOrderByAggregateInputObjectZodSchema = makeSchema();
