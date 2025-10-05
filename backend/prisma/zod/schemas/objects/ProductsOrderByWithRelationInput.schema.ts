import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProductQtyOrderByRelationAggregateInputObjectSchema as ProductQtyOrderByRelationAggregateInputObjectSchema } from './ProductQtyOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  inStock: SortOrderSchema.optional(),
  image: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  productQty: z.lazy(() => ProductQtyOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ProductsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ProductsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductsOrderByWithRelationInput>;
export const ProductsOrderByWithRelationInputObjectZodSchema = makeSchema();
