import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { EnumOrderStatusFilterObjectSchema as EnumOrderStatusFilterObjectSchema } from './EnumOrderStatusFilter.schema';
import { OrderStatusSchema } from '../enums/OrderStatus.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserNullableScalarRelationFilterObjectSchema as UserNullableScalarRelationFilterObjectSchema } from './UserNullableScalarRelationFilter.schema';
import { ProductQtyListRelationFilterObjectSchema as ProductQtyListRelationFilterObjectSchema } from './ProductQtyListRelationFilter.schema'

const orderswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => OrdersWhereInputObjectSchema), z.lazy(() => OrdersWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => OrdersWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => OrdersWhereInputObjectSchema), z.lazy(() => OrdersWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  clientId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  workerId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  deadLine: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  status: z.union([z.lazy(() => EnumOrderStatusFilterObjectSchema), OrderStatusSchema]).optional(),
  client: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  worker: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  productQty: z.lazy(() => ProductQtyListRelationFilterObjectSchema).optional()
}).strict();
export const OrdersWhereInputObjectSchema: z.ZodType<Prisma.OrdersWhereInput> = orderswhereinputSchema as unknown as z.ZodType<Prisma.OrdersWhereInput>;
export const OrdersWhereInputObjectZodSchema = orderswhereinputSchema;
