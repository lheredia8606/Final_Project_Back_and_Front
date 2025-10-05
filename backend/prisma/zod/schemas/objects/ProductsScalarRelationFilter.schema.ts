import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { ProductsWhereInputObjectSchema as ProductsWhereInputObjectSchema } from './ProductsWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ProductsWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ProductsWhereInputObjectSchema).optional()
}).strict();
export const ProductsScalarRelationFilterObjectSchema: z.ZodType<Prisma.ProductsScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ProductsScalarRelationFilter>;
export const ProductsScalarRelationFilterObjectZodSchema = makeSchema();
