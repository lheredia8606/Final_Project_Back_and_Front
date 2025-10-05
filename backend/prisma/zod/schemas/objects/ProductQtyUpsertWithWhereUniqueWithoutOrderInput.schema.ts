import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { ProductQtyWhereUniqueInputObjectSchema as ProductQtyWhereUniqueInputObjectSchema } from './ProductQtyWhereUniqueInput.schema';
import { ProductQtyUpdateWithoutOrderInputObjectSchema as ProductQtyUpdateWithoutOrderInputObjectSchema } from './ProductQtyUpdateWithoutOrderInput.schema';
import { ProductQtyUncheckedUpdateWithoutOrderInputObjectSchema as ProductQtyUncheckedUpdateWithoutOrderInputObjectSchema } from './ProductQtyUncheckedUpdateWithoutOrderInput.schema';
import { ProductQtyCreateWithoutOrderInputObjectSchema as ProductQtyCreateWithoutOrderInputObjectSchema } from './ProductQtyCreateWithoutOrderInput.schema';
import { ProductQtyUncheckedCreateWithoutOrderInputObjectSchema as ProductQtyUncheckedCreateWithoutOrderInputObjectSchema } from './ProductQtyUncheckedCreateWithoutOrderInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductQtyWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ProductQtyUpdateWithoutOrderInputObjectSchema), z.lazy(() => ProductQtyUncheckedUpdateWithoutOrderInputObjectSchema)]),
  create: z.union([z.lazy(() => ProductQtyCreateWithoutOrderInputObjectSchema), z.lazy(() => ProductQtyUncheckedCreateWithoutOrderInputObjectSchema)])
}).strict();
export const ProductQtyUpsertWithWhereUniqueWithoutOrderInputObjectSchema: z.ZodType<Prisma.ProductQtyUpsertWithWhereUniqueWithoutOrderInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductQtyUpsertWithWhereUniqueWithoutOrderInput>;
export const ProductQtyUpsertWithWhereUniqueWithoutOrderInputObjectZodSchema = makeSchema();
