import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { ProductQtyCreateWithoutProductInputObjectSchema as ProductQtyCreateWithoutProductInputObjectSchema } from './ProductQtyCreateWithoutProductInput.schema';
import { ProductQtyUncheckedCreateWithoutProductInputObjectSchema as ProductQtyUncheckedCreateWithoutProductInputObjectSchema } from './ProductQtyUncheckedCreateWithoutProductInput.schema';
import { ProductQtyCreateOrConnectWithoutProductInputObjectSchema as ProductQtyCreateOrConnectWithoutProductInputObjectSchema } from './ProductQtyCreateOrConnectWithoutProductInput.schema';
import { ProductQtyUpsertWithWhereUniqueWithoutProductInputObjectSchema as ProductQtyUpsertWithWhereUniqueWithoutProductInputObjectSchema } from './ProductQtyUpsertWithWhereUniqueWithoutProductInput.schema';
import { ProductQtyCreateManyProductInputEnvelopeObjectSchema as ProductQtyCreateManyProductInputEnvelopeObjectSchema } from './ProductQtyCreateManyProductInputEnvelope.schema';
import { ProductQtyWhereUniqueInputObjectSchema as ProductQtyWhereUniqueInputObjectSchema } from './ProductQtyWhereUniqueInput.schema';
import { ProductQtyUpdateWithWhereUniqueWithoutProductInputObjectSchema as ProductQtyUpdateWithWhereUniqueWithoutProductInputObjectSchema } from './ProductQtyUpdateWithWhereUniqueWithoutProductInput.schema';
import { ProductQtyUpdateManyWithWhereWithoutProductInputObjectSchema as ProductQtyUpdateManyWithWhereWithoutProductInputObjectSchema } from './ProductQtyUpdateManyWithWhereWithoutProductInput.schema';
import { ProductQtyScalarWhereInputObjectSchema as ProductQtyScalarWhereInputObjectSchema } from './ProductQtyScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductQtyCreateWithoutProductInputObjectSchema), z.lazy(() => ProductQtyCreateWithoutProductInputObjectSchema).array(), z.lazy(() => ProductQtyUncheckedCreateWithoutProductInputObjectSchema), z.lazy(() => ProductQtyUncheckedCreateWithoutProductInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProductQtyCreateOrConnectWithoutProductInputObjectSchema), z.lazy(() => ProductQtyCreateOrConnectWithoutProductInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ProductQtyUpsertWithWhereUniqueWithoutProductInputObjectSchema), z.lazy(() => ProductQtyUpsertWithWhereUniqueWithoutProductInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProductQtyCreateManyProductInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ProductQtyWhereUniqueInputObjectSchema), z.lazy(() => ProductQtyWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ProductQtyWhereUniqueInputObjectSchema), z.lazy(() => ProductQtyWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ProductQtyWhereUniqueInputObjectSchema), z.lazy(() => ProductQtyWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ProductQtyWhereUniqueInputObjectSchema), z.lazy(() => ProductQtyWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ProductQtyUpdateWithWhereUniqueWithoutProductInputObjectSchema), z.lazy(() => ProductQtyUpdateWithWhereUniqueWithoutProductInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ProductQtyUpdateManyWithWhereWithoutProductInputObjectSchema), z.lazy(() => ProductQtyUpdateManyWithWhereWithoutProductInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ProductQtyScalarWhereInputObjectSchema), z.lazy(() => ProductQtyScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ProductQtyUpdateManyWithoutProductNestedInputObjectSchema: z.ZodType<Prisma.ProductQtyUpdateManyWithoutProductNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductQtyUpdateManyWithoutProductNestedInput>;
export const ProductQtyUpdateManyWithoutProductNestedInputObjectZodSchema = makeSchema();
