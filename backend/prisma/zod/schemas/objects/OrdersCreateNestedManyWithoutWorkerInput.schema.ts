import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { OrdersCreateWithoutWorkerInputObjectSchema as OrdersCreateWithoutWorkerInputObjectSchema } from './OrdersCreateWithoutWorkerInput.schema';
import { OrdersUncheckedCreateWithoutWorkerInputObjectSchema as OrdersUncheckedCreateWithoutWorkerInputObjectSchema } from './OrdersUncheckedCreateWithoutWorkerInput.schema';
import { OrdersCreateOrConnectWithoutWorkerInputObjectSchema as OrdersCreateOrConnectWithoutWorkerInputObjectSchema } from './OrdersCreateOrConnectWithoutWorkerInput.schema';
import { OrdersCreateManyWorkerInputEnvelopeObjectSchema as OrdersCreateManyWorkerInputEnvelopeObjectSchema } from './OrdersCreateManyWorkerInputEnvelope.schema';
import { OrdersWhereUniqueInputObjectSchema as OrdersWhereUniqueInputObjectSchema } from './OrdersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrdersCreateWithoutWorkerInputObjectSchema), z.lazy(() => OrdersCreateWithoutWorkerInputObjectSchema).array(), z.lazy(() => OrdersUncheckedCreateWithoutWorkerInputObjectSchema), z.lazy(() => OrdersUncheckedCreateWithoutWorkerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrdersCreateOrConnectWithoutWorkerInputObjectSchema), z.lazy(() => OrdersCreateOrConnectWithoutWorkerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => OrdersCreateManyWorkerInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => OrdersWhereUniqueInputObjectSchema), z.lazy(() => OrdersWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const OrdersCreateNestedManyWithoutWorkerInputObjectSchema: z.ZodType<Prisma.OrdersCreateNestedManyWithoutWorkerInput> = makeSchema() as unknown as z.ZodType<Prisma.OrdersCreateNestedManyWithoutWorkerInput>;
export const OrdersCreateNestedManyWithoutWorkerInputObjectZodSchema = makeSchema();
