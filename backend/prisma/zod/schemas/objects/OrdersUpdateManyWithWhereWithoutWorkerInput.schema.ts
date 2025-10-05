import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { OrdersScalarWhereInputObjectSchema as OrdersScalarWhereInputObjectSchema } from './OrdersScalarWhereInput.schema';
import { OrdersUpdateManyMutationInputObjectSchema as OrdersUpdateManyMutationInputObjectSchema } from './OrdersUpdateManyMutationInput.schema';
import { OrdersUncheckedUpdateManyWithoutWorkerInputObjectSchema as OrdersUncheckedUpdateManyWithoutWorkerInputObjectSchema } from './OrdersUncheckedUpdateManyWithoutWorkerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrdersScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => OrdersUpdateManyMutationInputObjectSchema), z.lazy(() => OrdersUncheckedUpdateManyWithoutWorkerInputObjectSchema)])
}).strict();
export const OrdersUpdateManyWithWhereWithoutWorkerInputObjectSchema: z.ZodType<Prisma.OrdersUpdateManyWithWhereWithoutWorkerInput> = makeSchema() as unknown as z.ZodType<Prisma.OrdersUpdateManyWithWhereWithoutWorkerInput>;
export const OrdersUpdateManyWithWhereWithoutWorkerInputObjectZodSchema = makeSchema();
