import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { OrdersWhereUniqueInputObjectSchema as OrdersWhereUniqueInputObjectSchema } from './OrdersWhereUniqueInput.schema';
import { OrdersUpdateWithoutWorkerInputObjectSchema as OrdersUpdateWithoutWorkerInputObjectSchema } from './OrdersUpdateWithoutWorkerInput.schema';
import { OrdersUncheckedUpdateWithoutWorkerInputObjectSchema as OrdersUncheckedUpdateWithoutWorkerInputObjectSchema } from './OrdersUncheckedUpdateWithoutWorkerInput.schema';
import { OrdersCreateWithoutWorkerInputObjectSchema as OrdersCreateWithoutWorkerInputObjectSchema } from './OrdersCreateWithoutWorkerInput.schema';
import { OrdersUncheckedCreateWithoutWorkerInputObjectSchema as OrdersUncheckedCreateWithoutWorkerInputObjectSchema } from './OrdersUncheckedCreateWithoutWorkerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrdersWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => OrdersUpdateWithoutWorkerInputObjectSchema), z.lazy(() => OrdersUncheckedUpdateWithoutWorkerInputObjectSchema)]),
  create: z.union([z.lazy(() => OrdersCreateWithoutWorkerInputObjectSchema), z.lazy(() => OrdersUncheckedCreateWithoutWorkerInputObjectSchema)])
}).strict();
export const OrdersUpsertWithWhereUniqueWithoutWorkerInputObjectSchema: z.ZodType<Prisma.OrdersUpsertWithWhereUniqueWithoutWorkerInput> = makeSchema() as unknown as z.ZodType<Prisma.OrdersUpsertWithWhereUniqueWithoutWorkerInput>;
export const OrdersUpsertWithWhereUniqueWithoutWorkerInputObjectZodSchema = makeSchema();
