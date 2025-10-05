import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { EnumOrderStatusFilterObjectSchema as EnumOrderStatusFilterObjectSchema } from './EnumOrderStatusFilter.schema';
import { OrderStatusSchema } from '../enums/OrderStatus.schema'

const ordersscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => OrdersScalarWhereInputObjectSchema), z.lazy(() => OrdersScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => OrdersScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => OrdersScalarWhereInputObjectSchema), z.lazy(() => OrdersScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  clientId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  workerId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  deadLine: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  status: z.union([z.lazy(() => EnumOrderStatusFilterObjectSchema), OrderStatusSchema]).optional()
}).strict();
export const OrdersScalarWhereInputObjectSchema: z.ZodType<Prisma.OrdersScalarWhereInput> = ordersscalarwhereinputSchema as unknown as z.ZodType<Prisma.OrdersScalarWhereInput>;
export const OrdersScalarWhereInputObjectZodSchema = ordersscalarwhereinputSchema;
