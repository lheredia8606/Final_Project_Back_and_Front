import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { ProductsCountOutputTypeSelectObjectSchema as ProductsCountOutputTypeSelectObjectSchema } from './ProductsCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ProductsCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ProductsCountOutputTypeArgsObjectSchema = makeSchema();
export const ProductsCountOutputTypeArgsObjectZodSchema = makeSchema();
