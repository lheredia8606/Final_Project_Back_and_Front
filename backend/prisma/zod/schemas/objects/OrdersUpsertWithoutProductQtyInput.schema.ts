import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { OrdersUpdateWithoutProductQtyInputObjectSchema as OrdersUpdateWithoutProductQtyInputObjectSchema } from './OrdersUpdateWithoutProductQtyInput.schema';
import { OrdersUncheckedUpdateWithoutProductQtyInputObjectSchema as OrdersUncheckedUpdateWithoutProductQtyInputObjectSchema } from './OrdersUncheckedUpdateWithoutProductQtyInput.schema';
import { OrdersCreateWithoutProductQtyInputObjectSchema as OrdersCreateWithoutProductQtyInputObjectSchema } from './OrdersCreateWithoutProductQtyInput.schema';
import { OrdersUncheckedCreateWithoutProductQtyInputObjectSchema as OrdersUncheckedCreateWithoutProductQtyInputObjectSchema } from './OrdersUncheckedCreateWithoutProductQtyInput.schema';
import { OrdersWhereInputObjectSchema as OrdersWhereInputObjectSchema } from './OrdersWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => OrdersUpdateWithoutProductQtyInputObjectSchema), z.lazy(() => OrdersUncheckedUpdateWithoutProductQtyInputObjectSchema)]),
  create: z.union([z.lazy(() => OrdersCreateWithoutProductQtyInputObjectSchema), z.lazy(() => OrdersUncheckedCreateWithoutProductQtyInputObjectSchema)]),
  where: z.lazy(() => OrdersWhereInputObjectSchema).optional()
}).strict();
export const OrdersUpsertWithoutProductQtyInputObjectSchema: z.ZodType<Prisma.OrdersUpsertWithoutProductQtyInput> = makeSchema() as unknown as z.ZodType<Prisma.OrdersUpsertWithoutProductQtyInput>;
export const OrdersUpsertWithoutProductQtyInputObjectZodSchema = makeSchema();
