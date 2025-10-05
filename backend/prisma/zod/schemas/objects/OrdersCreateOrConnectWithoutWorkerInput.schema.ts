import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { OrdersWhereUniqueInputObjectSchema as OrdersWhereUniqueInputObjectSchema } from './OrdersWhereUniqueInput.schema';
import { OrdersCreateWithoutWorkerInputObjectSchema as OrdersCreateWithoutWorkerInputObjectSchema } from './OrdersCreateWithoutWorkerInput.schema';
import { OrdersUncheckedCreateWithoutWorkerInputObjectSchema as OrdersUncheckedCreateWithoutWorkerInputObjectSchema } from './OrdersUncheckedCreateWithoutWorkerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrdersWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrdersCreateWithoutWorkerInputObjectSchema), z.lazy(() => OrdersUncheckedCreateWithoutWorkerInputObjectSchema)])
}).strict();
export const OrdersCreateOrConnectWithoutWorkerInputObjectSchema: z.ZodType<Prisma.OrdersCreateOrConnectWithoutWorkerInput> = makeSchema() as unknown as z.ZodType<Prisma.OrdersCreateOrConnectWithoutWorkerInput>;
export const OrdersCreateOrConnectWithoutWorkerInputObjectZodSchema = makeSchema();
