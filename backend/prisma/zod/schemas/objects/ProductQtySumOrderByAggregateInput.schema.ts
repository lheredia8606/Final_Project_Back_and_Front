import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  orderId: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional(),
  qty: SortOrderSchema.optional()
}).strict();
export const ProductQtySumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductQtySumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductQtySumOrderByAggregateInput>;
export const ProductQtySumOrderByAggregateInputObjectZodSchema = makeSchema();
