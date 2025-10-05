import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { ProductsCreateWithoutProductQtyInputObjectSchema as ProductsCreateWithoutProductQtyInputObjectSchema } from './ProductsCreateWithoutProductQtyInput.schema';
import { ProductsUncheckedCreateWithoutProductQtyInputObjectSchema as ProductsUncheckedCreateWithoutProductQtyInputObjectSchema } from './ProductsUncheckedCreateWithoutProductQtyInput.schema';
import { ProductsCreateOrConnectWithoutProductQtyInputObjectSchema as ProductsCreateOrConnectWithoutProductQtyInputObjectSchema } from './ProductsCreateOrConnectWithoutProductQtyInput.schema';
import { ProductsWhereUniqueInputObjectSchema as ProductsWhereUniqueInputObjectSchema } from './ProductsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductsCreateWithoutProductQtyInputObjectSchema), z.lazy(() => ProductsUncheckedCreateWithoutProductQtyInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductsCreateOrConnectWithoutProductQtyInputObjectSchema).optional(),
  connect: z.lazy(() => ProductsWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProductsCreateNestedOneWithoutProductQtyInputObjectSchema: z.ZodType<Prisma.ProductsCreateNestedOneWithoutProductQtyInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductsCreateNestedOneWithoutProductQtyInput>;
export const ProductsCreateNestedOneWithoutProductQtyInputObjectZodSchema = makeSchema();
