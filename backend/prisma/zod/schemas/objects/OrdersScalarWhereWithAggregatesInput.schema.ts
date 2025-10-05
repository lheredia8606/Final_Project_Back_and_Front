import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { EnumOrderStatusWithAggregatesFilterObjectSchema as EnumOrderStatusWithAggregatesFilterObjectSchema } from './EnumOrderStatusWithAggregatesFilter.schema';
import { OrderStatusSchema } from '../enums/OrderStatus.schema'

const ordersscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => OrdersScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => OrdersScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => OrdersScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => OrdersScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => OrdersScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  clientId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  workerId: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  deadLine: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  status: z.union([z.lazy(() => EnumOrderStatusWithAggregatesFilterObjectSchema), OrderStatusSchema]).optional()
}).strict();
export const OrdersScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.OrdersScalarWhereWithAggregatesInput> = ordersscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.OrdersScalarWhereWithAggregatesInput>;
export const OrdersScalarWhereWithAggregatesInputObjectZodSchema = ordersscalarwherewithaggregatesinputSchema;
