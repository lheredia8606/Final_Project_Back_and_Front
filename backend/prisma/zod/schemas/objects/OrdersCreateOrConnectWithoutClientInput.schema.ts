import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { OrdersWhereUniqueInputObjectSchema as OrdersWhereUniqueInputObjectSchema } from './OrdersWhereUniqueInput.schema';
import { OrdersCreateWithoutClientInputObjectSchema as OrdersCreateWithoutClientInputObjectSchema } from './OrdersCreateWithoutClientInput.schema';
import { OrdersUncheckedCreateWithoutClientInputObjectSchema as OrdersUncheckedCreateWithoutClientInputObjectSchema } from './OrdersUncheckedCreateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrdersWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrdersCreateWithoutClientInputObjectSchema), z.lazy(() => OrdersUncheckedCreateWithoutClientInputObjectSchema)])
}).strict();
export const OrdersCreateOrConnectWithoutClientInputObjectSchema: z.ZodType<Prisma.OrdersCreateOrConnectWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.OrdersCreateOrConnectWithoutClientInput>;
export const OrdersCreateOrConnectWithoutClientInputObjectZodSchema = makeSchema();
