import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const OrdersOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.OrdersOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrdersOrderByRelationAggregateInput>;
export const OrdersOrderByRelationAggregateInputObjectZodSchema = makeSchema();
