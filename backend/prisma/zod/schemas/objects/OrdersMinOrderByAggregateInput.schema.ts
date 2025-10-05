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
export const OrdersMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OrdersMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrdersMinOrderByAggregateInput>;
export const OrdersMinOrderByAggregateInputObjectZodSchema = makeSchema();
