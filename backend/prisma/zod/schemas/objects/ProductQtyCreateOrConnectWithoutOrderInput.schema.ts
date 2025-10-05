import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { ProductQtyWhereUniqueInputObjectSchema as ProductQtyWhereUniqueInputObjectSchema } from './ProductQtyWhereUniqueInput.schema';
import { ProductQtyCreateWithoutOrderInputObjectSchema as ProductQtyCreateWithoutOrderInputObjectSchema } from './ProductQtyCreateWithoutOrderInput.schema';
import { ProductQtyUncheckedCreateWithoutOrderInputObjectSchema as ProductQtyUncheckedCreateWithoutOrderInputObjectSchema } from './ProductQtyUncheckedCreateWithoutOrderInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductQtyWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProductQtyCreateWithoutOrderInputObjectSchema), z.lazy(() => ProductQtyUncheckedCreateWithoutOrderInputObjectSchema)])
}).strict();
export const ProductQtyCreateOrConnectWithoutOrderInputObjectSchema: z.ZodType<Prisma.ProductQtyCreateOrConnectWithoutOrderInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductQtyCreateOrConnectWithoutOrderInput>;
export const ProductQtyCreateOrConnectWithoutOrderInputObjectZodSchema = makeSchema();
