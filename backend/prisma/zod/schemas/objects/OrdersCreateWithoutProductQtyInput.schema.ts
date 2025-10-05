import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { OrderStatusSchema } from '../enums/OrderStatus.schema';
import { UserCreateNestedOneWithoutClientOrdersInputObjectSchema as UserCreateNestedOneWithoutClientOrdersInputObjectSchema } from './UserCreateNestedOneWithoutClientOrdersInput.schema';
import { UserCreateNestedOneWithoutWorkerOrdersInputObjectSchema as UserCreateNestedOneWithoutWorkerOrdersInputObjectSchema } from './UserCreateNestedOneWithoutWorkerOrdersInput.schema'

const makeSchema = () => z.object({
  deadLine: z.coerce.date().optional().nullable(),
  status: OrderStatusSchema,
  client: z.lazy(() => UserCreateNestedOneWithoutClientOrdersInputObjectSchema),
  worker: z.lazy(() => UserCreateNestedOneWithoutWorkerOrdersInputObjectSchema).optional()
}).strict();
export const OrdersCreateWithoutProductQtyInputObjectSchema: z.ZodType<Prisma.OrdersCreateWithoutProductQtyInput> = makeSchema() as unknown as z.ZodType<Prisma.OrdersCreateWithoutProductQtyInput>;
export const OrdersCreateWithoutProductQtyInputObjectZodSchema = makeSchema();
