import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  price: SortOrderSchema.optional()
}).strict();
export const ProductsSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductsSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductsSumOrderByAggregateInput>;
export const ProductsSumOrderByAggregateInputObjectZodSchema = makeSchema();
