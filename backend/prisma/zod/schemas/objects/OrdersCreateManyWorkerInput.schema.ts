import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { OrderStatusSchema } from '../enums/OrderStatus.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  clientId: z.number().int(),
  deadLine: z.coerce.date().optional().nullable(),
  status: OrderStatusSchema
}).strict();
export const OrdersCreateManyWorkerInputObjectSchema: z.ZodType<Prisma.OrdersCreateManyWorkerInput> = makeSchema() as unknown as z.ZodType<Prisma.OrdersCreateManyWorkerInput>;
export const OrdersCreateManyWorkerInputObjectZodSchema = makeSchema();
