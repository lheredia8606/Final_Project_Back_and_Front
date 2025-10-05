import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { ProductQtyWhereUniqueInputObjectSchema as ProductQtyWhereUniqueInputObjectSchema } from './ProductQtyWhereUniqueInput.schema';
import { ProductQtyUpdateWithoutProductInputObjectSchema as ProductQtyUpdateWithoutProductInputObjectSchema } from './ProductQtyUpdateWithoutProductInput.schema';
import { ProductQtyUncheckedUpdateWithoutProductInputObjectSchema as ProductQtyUncheckedUpdateWithoutProductInputObjectSchema } from './ProductQtyUncheckedUpdateWithoutProductInput.schema';
import { ProductQtyCreateWithoutProductInputObjectSchema as ProductQtyCreateWithoutProductInputObjectSchema } from './ProductQtyCreateWithoutProductInput.schema';
import { ProductQtyUncheckedCreateWithoutProductInputObjectSchema as ProductQtyUncheckedCreateWithoutProductInputObjectSchema } from './ProductQtyUncheckedCreateWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductQtyWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ProductQtyUpdateWithoutProductInputObjectSchema), z.lazy(() => ProductQtyUncheckedUpdateWithoutProductInputObjectSchema)]),
  create: z.union([z.lazy(() => ProductQtyCreateWithoutProductInputObjectSchema), z.lazy(() => ProductQtyUncheckedCreateWithoutProductInputObjectSchema)])
}).strict();
export const ProductQtyUpsertWithWhereUniqueWithoutProductInputObjectSchema: z.ZodType<Prisma.ProductQtyUpsertWithWhereUniqueWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductQtyUpsertWithWhereUniqueWithoutProductInput>;
export const ProductQtyUpsertWithWhereUniqueWithoutProductInputObjectZodSchema = makeSchema();
