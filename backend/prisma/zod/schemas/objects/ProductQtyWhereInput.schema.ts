import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { OrdersScalarRelationFilterObjectSchema as OrdersScalarRelationFilterObjectSchema } from './OrdersScalarRelationFilter.schema';
import { OrdersWhereInputObjectSchema as OrdersWhereInputObjectSchema } from './OrdersWhereInput.schema';
import { ProductsScalarRelationFilterObjectSchema as ProductsScalarRelationFilterObjectSchema } from './ProductsScalarRelationFilter.schema';
import { ProductsWhereInputObjectSchema as ProductsWhereInputObjectSchema } from './ProductsWhereInput.schema'

const productqtywhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ProductQtyWhereInputObjectSchema), z.lazy(() => ProductQtyWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProductQtyWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProductQtyWhereInputObjectSchema), z.lazy(() => ProductQtyWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  orderId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  productId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  qty: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  order: z.union([z.lazy(() => OrdersScalarRelationFilterObjectSchema), z.lazy(() => OrdersWhereInputObjectSchema)]).optional(),
  product: z.union([z.lazy(() => ProductsScalarRelationFilterObjectSchema), z.lazy(() => ProductsWhereInputObjectSchema)]).optional()
}).strict();
export const ProductQtyWhereInputObjectSchema: z.ZodType<Prisma.ProductQtyWhereInput> = productqtywhereinputSchema as unknown as z.ZodType<Prisma.ProductQtyWhereInput>;
export const ProductQtyWhereInputObjectZodSchema = productqtywhereinputSchema;
