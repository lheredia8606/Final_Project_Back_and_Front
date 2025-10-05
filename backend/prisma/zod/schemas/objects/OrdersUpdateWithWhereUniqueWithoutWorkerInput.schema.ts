import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { OrdersWhereUniqueInputObjectSchema as OrdersWhereUniqueInputObjectSchema } from './OrdersWhereUniqueInput.schema';
import { OrdersUpdateWithoutWorkerInputObjectSchema as OrdersUpdateWithoutWorkerInputObjectSchema } from './OrdersUpdateWithoutWorkerInput.schema';
import { OrdersUncheckedUpdateWithoutWorkerInputObjectSchema as OrdersUncheckedUpdateWithoutWorkerInputObjectSchema } from './OrdersUncheckedUpdateWithoutWorkerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrdersWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => OrdersUpdateWithoutWorkerInputObjectSchema), z.lazy(() => OrdersUncheckedUpdateWithoutWorkerInputObjectSchema)])
}).strict();
export const OrdersUpdateWithWhereUniqueWithoutWorkerInputObjectSchema: z.ZodType<Prisma.OrdersUpdateWithWhereUniqueWithoutWorkerInput> = makeSchema() as unknown as z.ZodType<Prisma.OrdersUpdateWithWhereUniqueWithoutWorkerInput>;
export const OrdersUpdateWithWhereUniqueWithoutWorkerInputObjectZodSchema = makeSchema();
