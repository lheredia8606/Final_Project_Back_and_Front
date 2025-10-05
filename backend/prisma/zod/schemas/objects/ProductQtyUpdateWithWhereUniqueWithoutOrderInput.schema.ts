import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { ProductQtyWhereUniqueInputObjectSchema as ProductQtyWhereUniqueInputObjectSchema } from './ProductQtyWhereUniqueInput.schema';
import { ProductQtyUpdateWithoutOrderInputObjectSchema as ProductQtyUpdateWithoutOrderInputObjectSchema } from './ProductQtyUpdateWithoutOrderInput.schema';
import { ProductQtyUncheckedUpdateWithoutOrderInputObjectSchema as ProductQtyUncheckedUpdateWithoutOrderInputObjectSchema } from './ProductQtyUncheckedUpdateWithoutOrderInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductQtyWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ProductQtyUpdateWithoutOrderInputObjectSchema), z.lazy(() => ProductQtyUncheckedUpdateWithoutOrderInputObjectSchema)])
}).strict();
export const ProductQtyUpdateWithWhereUniqueWithoutOrderInputObjectSchema: z.ZodType<Prisma.ProductQtyUpdateWithWhereUniqueWithoutOrderInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductQtyUpdateWithWhereUniqueWithoutOrderInput>;
export const ProductQtyUpdateWithWhereUniqueWithoutOrderInputObjectZodSchema = makeSchema();
