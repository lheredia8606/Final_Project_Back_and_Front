import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  orderId: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional(),
  qty: SortOrderSchema.optional()
}).strict();
export const ProductQtyMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductQtyMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductQtyMaxOrderByAggregateInput>;
export const ProductQtyMaxOrderByAggregateInputObjectZodSchema = makeSchema();
