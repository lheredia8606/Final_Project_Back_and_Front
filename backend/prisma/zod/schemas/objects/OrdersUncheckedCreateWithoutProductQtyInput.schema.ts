import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { OrderStatusSchema } from '../enums/OrderStatus.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  clientId: z.number().int(),
  workerId: z.number().int().optional().nullable(),
  deadLine: z.coerce.date().optional().nullable(),
  status: OrderStatusSchema
}).strict();
export const OrdersUncheckedCreateWithoutProductQtyInputObjectSchema: z.ZodType<Prisma.OrdersUncheckedCreateWithoutProductQtyInput> = makeSchema() as unknown as z.ZodType<Prisma.OrdersUncheckedCreateWithoutProductQtyInput>;
export const OrdersUncheckedCreateWithoutProductQtyInputObjectZodSchema = makeSchema();
