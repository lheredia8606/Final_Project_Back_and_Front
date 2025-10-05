import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { ProductsCreateWithoutProductQtyInputObjectSchema as ProductsCreateWithoutProductQtyInputObjectSchema } from './ProductsCreateWithoutProductQtyInput.schema';
import { ProductsUncheckedCreateWithoutProductQtyInputObjectSchema as ProductsUncheckedCreateWithoutProductQtyInputObjectSchema } from './ProductsUncheckedCreateWithoutProductQtyInput.schema';
import { ProductsCreateOrConnectWithoutProductQtyInputObjectSchema as ProductsCreateOrConnectWithoutProductQtyInputObjectSchema } from './ProductsCreateOrConnectWithoutProductQtyInput.schema';
import { ProductsUpsertWithoutProductQtyInputObjectSchema as ProductsUpsertWithoutProductQtyInputObjectSchema } from './ProductsUpsertWithoutProductQtyInput.schema';
import { ProductsWhereUniqueInputObjectSchema as ProductsWhereUniqueInputObjectSchema } from './ProductsWhereUniqueInput.schema';
import { ProductsUpdateToOneWithWhereWithoutProductQtyInputObjectSchema as ProductsUpdateToOneWithWhereWithoutProductQtyInputObjectSchema } from './ProductsUpdateToOneWithWhereWithoutProductQtyInput.schema';
import { ProductsUpdateWithoutProductQtyInputObjectSchema as ProductsUpdateWithoutProductQtyInputObjectSchema } from './ProductsUpdateWithoutProductQtyInput.schema';
import { ProductsUncheckedUpdateWithoutProductQtyInputObjectSchema as ProductsUncheckedUpdateWithoutProductQtyInputObjectSchema } from './ProductsUncheckedUpdateWithoutProductQtyInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductsCreateWithoutProductQtyInputObjectSchema), z.lazy(() => ProductsUncheckedCreateWithoutProductQtyInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductsCreateOrConnectWithoutProductQtyInputObjectSchema).optional(),
  upsert: z.lazy(() => ProductsUpsertWithoutProductQtyInputObjectSchema).optional(),
  connect: z.lazy(() => ProductsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProductsUpdateToOneWithWhereWithoutProductQtyInputObjectSchema), z.lazy(() => ProductsUpdateWithoutProductQtyInputObjectSchema), z.lazy(() => ProductsUncheckedUpdateWithoutProductQtyInputObjectSchema)]).optional()
}).strict();
export const ProductsUpdateOneRequiredWithoutProductQtyNestedInputObjectSchema: z.ZodType<Prisma.ProductsUpdateOneRequiredWithoutProductQtyNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductsUpdateOneRequiredWithoutProductQtyNestedInput>;
export const ProductsUpdateOneRequiredWithoutProductQtyNestedInputObjectZodSchema = makeSchema();
