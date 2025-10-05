import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { ProductsUpdateWithoutProductQtyInputObjectSchema as ProductsUpdateWithoutProductQtyInputObjectSchema } from './ProductsUpdateWithoutProductQtyInput.schema';
import { ProductsUncheckedUpdateWithoutProductQtyInputObjectSchema as ProductsUncheckedUpdateWithoutProductQtyInputObjectSchema } from './ProductsUncheckedUpdateWithoutProductQtyInput.schema';
import { ProductsCreateWithoutProductQtyInputObjectSchema as ProductsCreateWithoutProductQtyInputObjectSchema } from './ProductsCreateWithoutProductQtyInput.schema';
import { ProductsUncheckedCreateWithoutProductQtyInputObjectSchema as ProductsUncheckedCreateWithoutProductQtyInputObjectSchema } from './ProductsUncheckedCreateWithoutProductQtyInput.schema';
import { ProductsWhereInputObjectSchema as ProductsWhereInputObjectSchema } from './ProductsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProductsUpdateWithoutProductQtyInputObjectSchema), z.lazy(() => ProductsUncheckedUpdateWithoutProductQtyInputObjectSchema)]),
  create: z.union([z.lazy(() => ProductsCreateWithoutProductQtyInputObjectSchema), z.lazy(() => ProductsUncheckedCreateWithoutProductQtyInputObjectSchema)]),
  where: z.lazy(() => ProductsWhereInputObjectSchema).optional()
}).strict();
export const ProductsUpsertWithoutProductQtyInputObjectSchema: z.ZodType<Prisma.ProductsUpsertWithoutProductQtyInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductsUpsertWithoutProductQtyInput>;
export const ProductsUpsertWithoutProductQtyInputObjectZodSchema = makeSchema();
