import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { ProductQtyFindManySchema as ProductQtyFindManySchema } from '../findManyProductQty.schema';
import { ProductsCountOutputTypeArgsObjectSchema as ProductsCountOutputTypeArgsObjectSchema } from './ProductsCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  name: z.boolean().optional(),
  inStock: z.boolean().optional(),
  image: z.boolean().optional(),
  price: z.boolean().optional(),
  productQty: z.union([z.boolean(), z.lazy(() => ProductQtyFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ProductsCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ProductsSelectObjectSchema: z.ZodType<Prisma.ProductsSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProductsSelect>;
export const ProductsSelectObjectZodSchema = makeSchema();
