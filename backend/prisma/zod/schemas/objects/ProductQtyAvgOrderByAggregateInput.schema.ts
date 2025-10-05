import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  orderId: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional(),
  qty: SortOrderSchema.optional()
}).strict();
export const ProductQtyAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductQtyAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductQtyAvgOrderByAggregateInput>;
export const ProductQtyAvgOrderByAggregateInputObjectZodSchema = makeSchema();
