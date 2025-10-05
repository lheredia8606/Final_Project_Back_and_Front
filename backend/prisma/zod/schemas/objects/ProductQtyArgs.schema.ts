import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { ProductQtySelectObjectSchema as ProductQtySelectObjectSchema } from './ProductQtySelect.schema';
import { ProductQtyIncludeObjectSchema as ProductQtyIncludeObjectSchema } from './ProductQtyInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ProductQtySelectObjectSchema).optional(),
  include: z.lazy(() => ProductQtyIncludeObjectSchema).optional()
}).strict();
export const ProductQtyArgsObjectSchema = makeSchema();
export const ProductQtyArgsObjectZodSchema = makeSchema();
