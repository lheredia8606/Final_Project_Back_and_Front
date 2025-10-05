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
export const ProductsMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductsMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductsMinOrderByAggregateInput>;
export const ProductsMinOrderByAggregateInputObjectZodSchema = makeSchema();
