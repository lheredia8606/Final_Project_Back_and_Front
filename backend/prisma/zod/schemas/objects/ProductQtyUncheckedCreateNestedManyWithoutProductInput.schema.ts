import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { ProductQtyCreateWithoutProductInputObjectSchema as ProductQtyCreateWithoutProductInputObjectSchema } from './ProductQtyCreateWithoutProductInput.schema';
import { ProductQtyUncheckedCreateWithoutProductInputObjectSchema as ProductQtyUncheckedCreateWithoutProductInputObjectSchema } from './ProductQtyUncheckedCreateWithoutProductInput.schema';
import { ProductQtyCreateOrConnectWithoutProductInputObjectSchema as ProductQtyCreateOrConnectWithoutProductInputObjectSchema } from './ProductQtyCreateOrConnectWithoutProductInput.schema';
import { ProductQtyCreateManyProductInputEnvelopeObjectSchema as ProductQtyCreateManyProductInputEnvelopeObjectSchema } from './ProductQtyCreateManyProductInputEnvelope.schema';
import { ProductQtyWhereUniqueInputObjectSchema as ProductQtyWhereUniqueInputObjectSchema } from './ProductQtyWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductQtyCreateWithoutProductInputObjectSchema), z.lazy(() => ProductQtyCreateWithoutProductInputObjectSchema).array(), z.lazy(() => ProductQtyUncheckedCreateWithoutProductInputObjectSchema), z.lazy(() => ProductQtyUncheckedCreateWithoutProductInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProductQtyCreateOrConnectWithoutProductInputObjectSchema), z.lazy(() => ProductQtyCreateOrConnectWithoutProductInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProductQtyCreateManyProductInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ProductQtyWhereUniqueInputObjectSchema), z.lazy(() => ProductQtyWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ProductQtyUncheckedCreateNestedManyWithoutProductInputObjectSchema: z.ZodType<Prisma.ProductQtyUncheckedCreateNestedManyWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductQtyUncheckedCreateNestedManyWithoutProductInput>;
export const ProductQtyUncheckedCreateNestedManyWithoutProductInputObjectZodSchema = makeSchema();
