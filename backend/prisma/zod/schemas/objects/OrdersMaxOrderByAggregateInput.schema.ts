import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional(),
  workerId: SortOrderSchema.optional(),
  deadLine: SortOrderSchema.optional(),
  status: SortOrderSchema.optional()
}).strict();
export const OrdersMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OrdersMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrdersMaxOrderByAggregateInput>;
export const OrdersMaxOrderByAggregateInputObjectZodSchema = makeSchema();
