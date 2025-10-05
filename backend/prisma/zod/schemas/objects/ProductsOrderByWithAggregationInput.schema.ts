import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProductsCountOrderByAggregateInputObjectSchema as ProductsCountOrderByAggregateInputObjectSchema } from './ProductsCountOrderByAggregateInput.schema';
import { ProductsAvgOrderByAggregateInputObjectSchema as ProductsAvgOrderByAggregateInputObjectSchema } from './ProductsAvgOrderByAggregateInput.schema';
import { ProductsMaxOrderByAggregateInputObjectSchema as ProductsMaxOrderByAggregateInputObjectSchema } from './ProductsMaxOrderByAggregateInput.schema';
import { ProductsMinOrderByAggregateInputObjectSchema as ProductsMinOrderByAggregateInputObjectSchema } from './ProductsMinOrderByAggregateInput.schema';
import { ProductsSumOrderByAggregateInputObjectSchema as ProductsSumOrderByAggregateInputObjectSchema } from './ProductsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  inStock: SortOrderSchema.optional(),
  image: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  _count: z.lazy(() => ProductsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ProductsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ProductsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ProductsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ProductsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ProductsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ProductsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductsOrderByWithAggregationInput>;
export const ProductsOrderByWithAggregationInputObjectZodSchema = makeSchema();
