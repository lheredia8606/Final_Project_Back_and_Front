import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  orderId: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional(),
  qty: SortOrderSchema.optional()
}).strict();
export const ProductQtyCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductQtyCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductQtyCountOrderByAggregateInput>;
export const ProductQtyCountOrderByAggregateInputObjectZodSchema = makeSchema();
