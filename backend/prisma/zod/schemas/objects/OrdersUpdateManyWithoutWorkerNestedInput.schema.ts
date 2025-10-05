import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { OrdersCreateWithoutWorkerInputObjectSchema as OrdersCreateWithoutWorkerInputObjectSchema } from './OrdersCreateWithoutWorkerInput.schema';
import { OrdersUncheckedCreateWithoutWorkerInputObjectSchema as OrdersUncheckedCreateWithoutWorkerInputObjectSchema } from './OrdersUncheckedCreateWithoutWorkerInput.schema';
import { OrdersCreateOrConnectWithoutWorkerInputObjectSchema as OrdersCreateOrConnectWithoutWorkerInputObjectSchema } from './OrdersCreateOrConnectWithoutWorkerInput.schema';
import { OrdersUpsertWithWhereUniqueWithoutWorkerInputObjectSchema as OrdersUpsertWithWhereUniqueWithoutWorkerInputObjectSchema } from './OrdersUpsertWithWhereUniqueWithoutWorkerInput.schema';
import { OrdersCreateManyWorkerInputEnvelopeObjectSchema as OrdersCreateManyWorkerInputEnvelopeObjectSchema } from './OrdersCreateManyWorkerInputEnvelope.schema';
import { OrdersWhereUniqueInputObjectSchema as OrdersWhereUniqueInputObjectSchema } from './OrdersWhereUniqueInput.schema';
import { OrdersUpdateWithWhereUniqueWithoutWorkerInputObjectSchema as OrdersUpdateWithWhereUniqueWithoutWorkerInputObjectSchema } from './OrdersUpdateWithWhereUniqueWithoutWorkerInput.schema';
import { OrdersUpdateManyWithWhereWithoutWorkerInputObjectSchema as OrdersUpdateManyWithWhereWithoutWorkerInputObjectSchema } from './OrdersUpdateManyWithWhereWithoutWorkerInput.schema';
import { OrdersScalarWhereInputObjectSchema as OrdersScalarWhereInputObjectSchema } from './OrdersScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrdersCreateWithoutWorkerInputObjectSchema), z.lazy(() => OrdersCreateWithoutWorkerInputObjectSchema).array(), z.lazy(() => OrdersUncheckedCreateWithoutWorkerInputObjectSchema), z.lazy(() => OrdersUncheckedCreateWithoutWorkerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrdersCreateOrConnectWithoutWorkerInputObjectSchema), z.lazy(() => OrdersCreateOrConnectWithoutWorkerInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => OrdersUpsertWithWhereUniqueWithoutWorkerInputObjectSchema), z.lazy(() => OrdersUpsertWithWhereUniqueWithoutWorkerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => OrdersCreateManyWorkerInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => OrdersWhereUniqueInputObjectSchema), z.lazy(() => OrdersWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => OrdersWhereUniqueInputObjectSchema), z.lazy(() => OrdersWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => OrdersWhereUniqueInputObjectSchema), z.lazy(() => OrdersWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => OrdersWhereUniqueInputObjectSchema), z.lazy(() => OrdersWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => OrdersUpdateWithWhereUniqueWithoutWorkerInputObjectSchema), z.lazy(() => OrdersUpdateWithWhereUniqueWithoutWorkerInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => OrdersUpdateManyWithWhereWithoutWorkerInputObjectSchema), z.lazy(() => OrdersUpdateManyWithWhereWithoutWorkerInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => OrdersScalarWhereInputObjectSchema), z.lazy(() => OrdersScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const OrdersUpdateManyWithoutWorkerNestedInputObjectSchema: z.ZodType<Prisma.OrdersUpdateManyWithoutWorkerNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrdersUpdateManyWithoutWorkerNestedInput>;
export const OrdersUpdateManyWithoutWorkerNestedInputObjectZodSchema = makeSchema();
