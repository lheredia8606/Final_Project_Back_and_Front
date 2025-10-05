import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { OrdersWhereUniqueInputObjectSchema as OrdersWhereUniqueInputObjectSchema } from './OrdersWhereUniqueInput.schema';
import { OrdersUpdateWithoutClientInputObjectSchema as OrdersUpdateWithoutClientInputObjectSchema } from './OrdersUpdateWithoutClientInput.schema';
import { OrdersUncheckedUpdateWithoutClientInputObjectSchema as OrdersUncheckedUpdateWithoutClientInputObjectSchema } from './OrdersUncheckedUpdateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrdersWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => OrdersUpdateWithoutClientInputObjectSchema), z.lazy(() => OrdersUncheckedUpdateWithoutClientInputObjectSchema)])
}).strict();
export const OrdersUpdateWithWhereUniqueWithoutClientInputObjectSchema: z.ZodType<Prisma.OrdersUpdateWithWhereUniqueWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.OrdersUpdateWithWhereUniqueWithoutClientInput>;
export const OrdersUpdateWithWhereUniqueWithoutClientInputObjectZodSchema = makeSchema();
