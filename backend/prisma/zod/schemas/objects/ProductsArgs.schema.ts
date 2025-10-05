import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { ProductsSelectObjectSchema as ProductsSelectObjectSchema } from './ProductsSelect.schema';
import { ProductsIncludeObjectSchema as ProductsIncludeObjectSchema } from './ProductsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ProductsSelectObjectSchema).optional(),
  include: z.lazy(() => ProductsIncludeObjectSchema).optional()
}).strict();
export const ProductsArgsObjectSchema = makeSchema();
export const ProductsArgsObjectZodSchema = makeSchema();
