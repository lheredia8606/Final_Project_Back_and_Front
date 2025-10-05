import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { ProductsWhereUniqueInputObjectSchema as ProductsWhereUniqueInputObjectSchema } from './ProductsWhereUniqueInput.schema';
import { ProductsCreateWithoutProductQtyInputObjectSchema as ProductsCreateWithoutProductQtyInputObjectSchema } from './ProductsCreateWithoutProductQtyInput.schema';
import { ProductsUncheckedCreateWithoutProductQtyInputObjectSchema as ProductsUncheckedCreateWithoutProductQtyInputObjectSchema } from './ProductsUncheckedCreateWithoutProductQtyInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProductsCreateWithoutProductQtyInputObjectSchema), z.lazy(() => ProductsUncheckedCreateWithoutProductQtyInputObjectSchema)])
}).strict();
export const ProductsCreateOrConnectWithoutProductQtyInputObjectSchema: z.ZodType<Prisma.ProductsCreateOrConnectWithoutProductQtyInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductsCreateOrConnectWithoutProductQtyInput>;
export const ProductsCreateOrConnectWithoutProductQtyInputObjectZodSchema = makeSchema();
