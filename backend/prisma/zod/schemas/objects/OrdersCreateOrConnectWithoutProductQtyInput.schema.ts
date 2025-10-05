import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { OrdersWhereUniqueInputObjectSchema as OrdersWhereUniqueInputObjectSchema } from './OrdersWhereUniqueInput.schema';
import { OrdersCreateWithoutProductQtyInputObjectSchema as OrdersCreateWithoutProductQtyInputObjectSchema } from './OrdersCreateWithoutProductQtyInput.schema';
import { OrdersUncheckedCreateWithoutProductQtyInputObjectSchema as OrdersUncheckedCreateWithoutProductQtyInputObjectSchema } from './OrdersUncheckedCreateWithoutProductQtyInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrdersWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrdersCreateWithoutProductQtyInputObjectSchema), z.lazy(() => OrdersUncheckedCreateWithoutProductQtyInputObjectSchema)])
}).strict();
export const OrdersCreateOrConnectWithoutProductQtyInputObjectSchema: z.ZodType<Prisma.OrdersCreateOrConnectWithoutProductQtyInput> = makeSchema() as unknown as z.ZodType<Prisma.OrdersCreateOrConnectWithoutProductQtyInput>;
export const OrdersCreateOrConnectWithoutProductQtyInputObjectZodSchema = makeSchema();
