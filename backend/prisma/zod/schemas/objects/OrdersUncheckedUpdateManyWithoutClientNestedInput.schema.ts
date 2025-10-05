import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { OrdersCreateWithoutClientInputObjectSchema as OrdersCreateWithoutClientInputObjectSchema } from './OrdersCreateWithoutClientInput.schema';
import { OrdersUncheckedCreateWithoutClientInputObjectSchema as OrdersUncheckedCreateWithoutClientInputObjectSchema } from './OrdersUncheckedCreateWithoutClientInput.schema';
import { OrdersCreateOrConnectWithoutClientInputObjectSchema as OrdersCreateOrConnectWithoutClientInputObjectSchema } from './OrdersCreateOrConnectWithoutClientInput.schema';
import { OrdersUpsertWithWhereUniqueWithoutClientInputObjectSchema as OrdersUpsertWithWhereUniqueWithoutClientInputObjectSchema } from './OrdersUpsertWithWhereUniqueWithoutClientInput.schema';
import { OrdersCreateManyClientInputEnvelopeObjectSchema as OrdersCreateManyClientInputEnvelopeObjectSchema } from './OrdersCreateManyClientInputEnvelope.schema';
import { OrdersWhereUniqueInputObjectSchema as OrdersWhereUniqueInputObjectSchema } from './OrdersWhereUniqueInput.schema';
import { OrdersUpdateWithWhereUniqueWithoutClientInputObjectSchema as OrdersUpdateWithWhereUniqueWithoutClientInputObjectSchema } from './OrdersUpdateWithWhereUniqueWithoutClientInput.schema';
import { OrdersUpdateManyWithWhereWithoutClientInputObjectSchema as OrdersUpdateManyWithWhereWithoutClientInputObjectSchema } from './OrdersUpdateManyWithWhereWithoutClientInput.schema';
import { OrdersScalarWhereInputObjectSchema as OrdersScalarWhereInputObjectSchema } from './OrdersScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrdersCreateWithoutClientInputObjectSchema), z.lazy(() => OrdersCreateWithoutClientInputObjectSchema).array(), z.lazy(() => OrdersUncheckedCreateWithoutClientInputObjectSchema), z.lazy(() => OrdersUncheckedCreateWithoutClientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrdersCreateOrConnectWithoutClientInputObjectSchema), z.lazy(() => OrdersCreateOrConnectWithoutClientInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => OrdersUpsertWithWhereUniqueWithoutClientInputObjectSchema), z.lazy(() => OrdersUpsertWithWhereUniqueWithoutClientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => OrdersCreateManyClientInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => OrdersWhereUniqueInputObjectSchema), z.lazy(() => OrdersWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => OrdersWhereUniqueInputObjectSchema), z.lazy(() => OrdersWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => OrdersWhereUniqueInputObjectSchema), z.lazy(() => OrdersWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => OrdersWhereUniqueInputObjectSchema), z.lazy(() => OrdersWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => OrdersUpdateWithWhereUniqueWithoutClientInputObjectSchema), z.lazy(() => OrdersUpdateWithWhereUniqueWithoutClientInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => OrdersUpdateManyWithWhereWithoutClientInputObjectSchema), z.lazy(() => OrdersUpdateManyWithWhereWithoutClientInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => OrdersScalarWhereInputObjectSchema), z.lazy(() => OrdersScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const OrdersUncheckedUpdateManyWithoutClientNestedInputObjectSchema: z.ZodType<Prisma.OrdersUncheckedUpdateManyWithoutClientNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrdersUncheckedUpdateManyWithoutClientNestedInput>;
export const OrdersUncheckedUpdateManyWithoutClientNestedInputObjectZodSchema = makeSchema();
