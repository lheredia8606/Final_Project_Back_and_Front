import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { OrdersScalarWhereInputObjectSchema as OrdersScalarWhereInputObjectSchema } from './OrdersScalarWhereInput.schema';
import { OrdersUpdateManyMutationInputObjectSchema as OrdersUpdateManyMutationInputObjectSchema } from './OrdersUpdateManyMutationInput.schema';
import { OrdersUncheckedUpdateManyWithoutClientInputObjectSchema as OrdersUncheckedUpdateManyWithoutClientInputObjectSchema } from './OrdersUncheckedUpdateManyWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrdersScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => OrdersUpdateManyMutationInputObjectSchema), z.lazy(() => OrdersUncheckedUpdateManyWithoutClientInputObjectSchema)])
}).strict();
export const OrdersUpdateManyWithWhereWithoutClientInputObjectSchema: z.ZodType<Prisma.OrdersUpdateManyWithWhereWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.OrdersUpdateManyWithWhereWithoutClientInput>;
export const OrdersUpdateManyWithWhereWithoutClientInputObjectZodSchema = makeSchema();
