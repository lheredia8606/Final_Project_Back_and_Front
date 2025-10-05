import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { OrdersOrderByWithRelationInputObjectSchema as OrdersOrderByWithRelationInputObjectSchema } from './OrdersOrderByWithRelationInput.schema';
import { ProductsOrderByWithRelationInputObjectSchema as ProductsOrderByWithRelationInputObjectSchema } from './ProductsOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  orderId: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional(),
  qty: SortOrderSchema.optional(),
  order: z.lazy(() => OrdersOrderByWithRelationInputObjectSchema).optional(),
  product: z.lazy(() => ProductsOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ProductQtyOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ProductQtyOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductQtyOrderByWithRelationInput>;
export const ProductQtyOrderByWithRelationInputObjectZodSchema = makeSchema();
