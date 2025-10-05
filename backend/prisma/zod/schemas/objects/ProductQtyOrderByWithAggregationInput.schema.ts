import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProductQtyCountOrderByAggregateInputObjectSchema as ProductQtyCountOrderByAggregateInputObjectSchema } from './ProductQtyCountOrderByAggregateInput.schema';
import { ProductQtyAvgOrderByAggregateInputObjectSchema as ProductQtyAvgOrderByAggregateInputObjectSchema } from './ProductQtyAvgOrderByAggregateInput.schema';
import { ProductQtyMaxOrderByAggregateInputObjectSchema as ProductQtyMaxOrderByAggregateInputObjectSchema } from './ProductQtyMaxOrderByAggregateInput.schema';
import { ProductQtyMinOrderByAggregateInputObjectSchema as ProductQtyMinOrderByAggregateInputObjectSchema } from './ProductQtyMinOrderByAggregateInput.schema';
import { ProductQtySumOrderByAggregateInputObjectSchema as ProductQtySumOrderByAggregateInputObjectSchema } from './ProductQtySumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  orderId: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional(),
  qty: SortOrderSchema.optional(),
  _count: z.lazy(() => ProductQtyCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ProductQtyAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ProductQtyMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ProductQtyMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ProductQtySumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ProductQtyOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ProductQtyOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductQtyOrderByWithAggregationInput>;
export const ProductQtyOrderByWithAggregationInputObjectZodSchema = makeSchema();
