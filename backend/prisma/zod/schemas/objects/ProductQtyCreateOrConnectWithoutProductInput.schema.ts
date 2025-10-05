import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { ProductQtyWhereUniqueInputObjectSchema as ProductQtyWhereUniqueInputObjectSchema } from './ProductQtyWhereUniqueInput.schema';
import { ProductQtyCreateWithoutProductInputObjectSchema as ProductQtyCreateWithoutProductInputObjectSchema } from './ProductQtyCreateWithoutProductInput.schema';
import { ProductQtyUncheckedCreateWithoutProductInputObjectSchema as ProductQtyUncheckedCreateWithoutProductInputObjectSchema } from './ProductQtyUncheckedCreateWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductQtyWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProductQtyCreateWithoutProductInputObjectSchema), z.lazy(() => ProductQtyUncheckedCreateWithoutProductInputObjectSchema)])
}).strict();
export const ProductQtyCreateOrConnectWithoutProductInputObjectSchema: z.ZodType<Prisma.ProductQtyCreateOrConnectWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductQtyCreateOrConnectWithoutProductInput>;
export const ProductQtyCreateOrConnectWithoutProductInputObjectZodSchema = makeSchema();
