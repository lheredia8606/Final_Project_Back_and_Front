import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { OrdersArgsObjectSchema as OrdersArgsObjectSchema } from './OrdersArgs.schema';
import { ProductsArgsObjectSchema as ProductsArgsObjectSchema } from './ProductsArgs.schema'

const makeSchema = () => z.object({
  order: z.union([z.boolean(), z.lazy(() => OrdersArgsObjectSchema)]).optional(),
  product: z.union([z.boolean(), z.lazy(() => ProductsArgsObjectSchema)]).optional()
}).strict();
export const ProductQtyIncludeObjectSchema: z.ZodType<Prisma.ProductQtyInclude> = makeSchema() as unknown as z.ZodType<Prisma.ProductQtyInclude>;
export const ProductQtyIncludeObjectZodSchema = makeSchema();
