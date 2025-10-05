import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { OrdersWhereUniqueInputObjectSchema as OrdersWhereUniqueInputObjectSchema } from './OrdersWhereUniqueInput.schema';
import { OrdersUpdateWithoutClientInputObjectSchema as OrdersUpdateWithoutClientInputObjectSchema } from './OrdersUpdateWithoutClientInput.schema';
import { OrdersUncheckedUpdateWithoutClientInputObjectSchema as OrdersUncheckedUpdateWithoutClientInputObjectSchema } from './OrdersUncheckedUpdateWithoutClientInput.schema';
import { OrdersCreateWithoutClientInputObjectSchema as OrdersCreateWithoutClientInputObjectSchema } from './OrdersCreateWithoutClientInput.schema';
import { OrdersUncheckedCreateWithoutClientInputObjectSchema as OrdersUncheckedCreateWithoutClientInputObjectSchema } from './OrdersUncheckedCreateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrdersWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => OrdersUpdateWithoutClientInputObjectSchema), z.lazy(() => OrdersUncheckedUpdateWithoutClientInputObjectSchema)]),
  create: z.union([z.lazy(() => OrdersCreateWithoutClientInputObjectSchema), z.lazy(() => OrdersUncheckedCreateWithoutClientInputObjectSchema)])
}).strict();
export const OrdersUpsertWithWhereUniqueWithoutClientInputObjectSchema: z.ZodType<Prisma.OrdersUpsertWithWhereUniqueWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.OrdersUpsertWithWhereUniqueWithoutClientInput>;
export const OrdersUpsertWithWhereUniqueWithoutClientInputObjectZodSchema = makeSchema();
