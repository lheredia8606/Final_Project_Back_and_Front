import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { ProductsWhereInputObjectSchema as ProductsWhereInputObjectSchema } from './ProductsWhereInput.schema';
import { ProductsUpdateWithoutProductQtyInputObjectSchema as ProductsUpdateWithoutProductQtyInputObjectSchema } from './ProductsUpdateWithoutProductQtyInput.schema';
import { ProductsUncheckedUpdateWithoutProductQtyInputObjectSchema as ProductsUncheckedUpdateWithoutProductQtyInputObjectSchema } from './ProductsUncheckedUpdateWithoutProductQtyInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProductsUpdateWithoutProductQtyInputObjectSchema), z.lazy(() => ProductsUncheckedUpdateWithoutProductQtyInputObjectSchema)])
}).strict();
export const ProductsUpdateToOneWithWhereWithoutProductQtyInputObjectSchema: z.ZodType<Prisma.ProductsUpdateToOneWithWhereWithoutProductQtyInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductsUpdateToOneWithWhereWithoutProductQtyInput>;
export const ProductsUpdateToOneWithWhereWithoutProductQtyInputObjectZodSchema = makeSchema();
