import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { OrderStatusSchema } from '../enums/OrderStatus.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  workerId: z.number().int().optional().nullable(),
  deadLine: z.coerce.date().optional().nullable(),
  status: OrderStatusSchema
}).strict();
export const OrdersCreateManyClientInputObjectSchema: z.ZodType<Prisma.OrdersCreateManyClientInput> = makeSchema() as unknown as z.ZodType<Prisma.OrdersCreateManyClientInput>;
export const OrdersCreateManyClientInputObjectZodSchema = makeSchema();
