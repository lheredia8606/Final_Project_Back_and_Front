import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { OrdersArgsObjectSchema as OrdersArgsObjectSchema } from './OrdersArgs.schema';
import { ProductsArgsObjectSchema as ProductsArgsObjectSchema } from './ProductsArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  orderId: z.boolean().optional(),
  productId: z.boolean().optional(),
  qty: z.boolean().optional(),
  order: z.union([z.boolean(), z.lazy(() => OrdersArgsObjectSchema)]).optional(),
  product: z.union([z.boolean(), z.lazy(() => ProductsArgsObjectSchema)]).optional()
}).strict();
export const ProductQtySelectObjectSchema: z.ZodType<Prisma.ProductQtySelect> = makeSchema() as unknown as z.ZodType<Prisma.ProductQtySelect>;
export const ProductQtySelectObjectZodSchema = makeSchema();
