import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { ProductQtyFindManySchema as ProductQtyFindManySchema } from '../findManyProductQty.schema';
import { ProductsCountOutputTypeArgsObjectSchema as ProductsCountOutputTypeArgsObjectSchema } from './ProductsCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  productQty: z.union([z.boolean(), z.lazy(() => ProductQtyFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ProductsCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ProductsIncludeObjectSchema: z.ZodType<Prisma.ProductsInclude> = makeSchema() as unknown as z.ZodType<Prisma.ProductsInclude>;
export const ProductsIncludeObjectZodSchema = makeSchema();
