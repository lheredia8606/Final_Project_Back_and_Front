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
export const OrdersCreateManyInputObjectSchema: z.ZodType<Prisma.OrdersCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.OrdersCreateManyInput>;
export const OrdersCreateManyInputObjectZodSchema = makeSchema();
