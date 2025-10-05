import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { OrdersCreateWithoutProductQtyInputObjectSchema as OrdersCreateWithoutProductQtyInputObjectSchema } from './OrdersCreateWithoutProductQtyInput.schema';
import { OrdersUncheckedCreateWithoutProductQtyInputObjectSchema as OrdersUncheckedCreateWithoutProductQtyInputObjectSchema } from './OrdersUncheckedCreateWithoutProductQtyInput.schema';
import { OrdersCreateOrConnectWithoutProductQtyInputObjectSchema as OrdersCreateOrConnectWithoutProductQtyInputObjectSchema } from './OrdersCreateOrConnectWithoutProductQtyInput.schema';
import { OrdersWhereUniqueInputObjectSchema as OrdersWhereUniqueInputObjectSchema } from './OrdersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrdersCreateWithoutProductQtyInputObjectSchema), z.lazy(() => OrdersUncheckedCreateWithoutProductQtyInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrdersCreateOrConnectWithoutProductQtyInputObjectSchema).optional(),
  connect: z.lazy(() => OrdersWhereUniqueInputObjectSchema).optional()
}).strict();
export const OrdersCreateNestedOneWithoutProductQtyInputObjectSchema: z.ZodType<Prisma.OrdersCreateNestedOneWithoutProductQtyInput> = makeSchema() as unknown as z.ZodType<Prisma.OrdersCreateNestedOneWithoutProductQtyInput>;
export const OrdersCreateNestedOneWithoutProductQtyInputObjectZodSchema = makeSchema();
