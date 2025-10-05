import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { ProductQtyWhereUniqueInputObjectSchema as ProductQtyWhereUniqueInputObjectSchema } from './ProductQtyWhereUniqueInput.schema';
import { ProductQtyUpdateWithoutProductInputObjectSchema as ProductQtyUpdateWithoutProductInputObjectSchema } from './ProductQtyUpdateWithoutProductInput.schema';
import { ProductQtyUncheckedUpdateWithoutProductInputObjectSchema as ProductQtyUncheckedUpdateWithoutProductInputObjectSchema } from './ProductQtyUncheckedUpdateWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductQtyWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ProductQtyUpdateWithoutProductInputObjectSchema), z.lazy(() => ProductQtyUncheckedUpdateWithoutProductInputObjectSchema)])
}).strict();
export const ProductQtyUpdateWithWhereUniqueWithoutProductInputObjectSchema: z.ZodType<Prisma.ProductQtyUpdateWithWhereUniqueWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductQtyUpdateWithWhereUniqueWithoutProductInput>;
export const ProductQtyUpdateWithWhereUniqueWithoutProductInputObjectZodSchema = makeSchema();
