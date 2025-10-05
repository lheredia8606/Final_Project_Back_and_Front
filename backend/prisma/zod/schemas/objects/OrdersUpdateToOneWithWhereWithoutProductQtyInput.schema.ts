import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { OrdersWhereInputObjectSchema as OrdersWhereInputObjectSchema } from './OrdersWhereInput.schema';
import { OrdersUpdateWithoutProductQtyInputObjectSchema as OrdersUpdateWithoutProductQtyInputObjectSchema } from './OrdersUpdateWithoutProductQtyInput.schema';
import { OrdersUncheckedUpdateWithoutProductQtyInputObjectSchema as OrdersUncheckedUpdateWithoutProductQtyInputObjectSchema } from './OrdersUncheckedUpdateWithoutProductQtyInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrdersWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => OrdersUpdateWithoutProductQtyInputObjectSchema), z.lazy(() => OrdersUncheckedUpdateWithoutProductQtyInputObjectSchema)])
}).strict();
export const OrdersUpdateToOneWithWhereWithoutProductQtyInputObjectSchema: z.ZodType<Prisma.OrdersUpdateToOneWithWhereWithoutProductQtyInput> = makeSchema() as unknown as z.ZodType<Prisma.OrdersUpdateToOneWithWhereWithoutProductQtyInput>;
export const OrdersUpdateToOneWithWhereWithoutProductQtyInputObjectZodSchema = makeSchema();
