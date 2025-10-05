import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { ProductQtyCreateWithoutOrderInputObjectSchema as ProductQtyCreateWithoutOrderInputObjectSchema } from './ProductQtyCreateWithoutOrderInput.schema';
import { ProductQtyUncheckedCreateWithoutOrderInputObjectSchema as ProductQtyUncheckedCreateWithoutOrderInputObjectSchema } from './ProductQtyUncheckedCreateWithoutOrderInput.schema';
import { ProductQtyCreateOrConnectWithoutOrderInputObjectSchema as ProductQtyCreateOrConnectWithoutOrderInputObjectSchema } from './ProductQtyCreateOrConnectWithoutOrderInput.schema';
import { ProductQtyUpsertWithWhereUniqueWithoutOrderInputObjectSchema as ProductQtyUpsertWithWhereUniqueWithoutOrderInputObjectSchema } from './ProductQtyUpsertWithWhereUniqueWithoutOrderInput.schema';
import { ProductQtyCreateManyOrderInputEnvelopeObjectSchema as ProductQtyCreateManyOrderInputEnvelopeObjectSchema } from './ProductQtyCreateManyOrderInputEnvelope.schema';
import { ProductQtyWhereUniqueInputObjectSchema as ProductQtyWhereUniqueInputObjectSchema } from './ProductQtyWhereUniqueInput.schema';
import { ProductQtyUpdateWithWhereUniqueWithoutOrderInputObjectSchema as ProductQtyUpdateWithWhereUniqueWithoutOrderInputObjectSchema } from './ProductQtyUpdateWithWhereUniqueWithoutOrderInput.schema';
import { ProductQtyUpdateManyWithWhereWithoutOrderInputObjectSchema as ProductQtyUpdateManyWithWhereWithoutOrderInputObjectSchema } from './ProductQtyUpdateManyWithWhereWithoutOrderInput.schema';
import { ProductQtyScalarWhereInputObjectSchema as ProductQtyScalarWhereInputObjectSchema } from './ProductQtyScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductQtyCreateWithoutOrderInputObjectSchema), z.lazy(() => ProductQtyCreateWithoutOrderInputObjectSchema).array(), z.lazy(() => ProductQtyUncheckedCreateWithoutOrderInputObjectSchema), z.lazy(() => ProductQtyUncheckedCreateWithoutOrderInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProductQtyCreateOrConnectWithoutOrderInputObjectSchema), z.lazy(() => ProductQtyCreateOrConnectWithoutOrderInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ProductQtyUpsertWithWhereUniqueWithoutOrderInputObjectSchema), z.lazy(() => ProductQtyUpsertWithWhereUniqueWithoutOrderInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProductQtyCreateManyOrderInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ProductQtyWhereUniqueInputObjectSchema), z.lazy(() => ProductQtyWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ProductQtyWhereUniqueInputObjectSchema), z.lazy(() => ProductQtyWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ProductQtyWhereUniqueInputObjectSchema), z.lazy(() => ProductQtyWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ProductQtyWhereUniqueInputObjectSchema), z.lazy(() => ProductQtyWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ProductQtyUpdateWithWhereUniqueWithoutOrderInputObjectSchema), z.lazy(() => ProductQtyUpdateWithWhereUniqueWithoutOrderInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ProductQtyUpdateManyWithWhereWithoutOrderInputObjectSchema), z.lazy(() => ProductQtyUpdateManyWithWhereWithoutOrderInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ProductQtyScalarWhereInputObjectSchema), z.lazy(() => ProductQtyScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ProductQtyUncheckedUpdateManyWithoutOrderNestedInputObjectSchema: z.ZodType<Prisma.ProductQtyUncheckedUpdateManyWithoutOrderNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductQtyUncheckedUpdateManyWithoutOrderNestedInput>;
export const ProductQtyUncheckedUpdateManyWithoutOrderNestedInputObjectZodSchema = makeSchema();
