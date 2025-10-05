import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  inStock: SortOrderSchema.optional(),
  image: SortOrderSchema.optional(),
  price: SortOrderSchema.optional()
}).strict();
export const ProductsMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductsMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductsMaxOrderByAggregateInput>;
export const ProductsMaxOrderByAggregateInputObjectZodSchema = makeSchema();
