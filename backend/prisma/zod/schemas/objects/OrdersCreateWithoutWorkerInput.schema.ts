import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { OrderStatusSchema } from '../enums/OrderStatus.schema';
import { UserCreateNestedOneWithoutClientOrdersInputObjectSchema as UserCreateNestedOneWithoutClientOrdersInputObjectSchema } from './UserCreateNestedOneWithoutClientOrdersInput.schema';
import { ProductQtyCreateNestedManyWithoutOrderInputObjectSchema as ProductQtyCreateNestedManyWithoutOrderInputObjectSchema } from './ProductQtyCreateNestedManyWithoutOrderInput.schema'

const makeSchema = () => z.object({
  deadLine: z.coerce.date().optional().nullable(),
  status: OrderStatusSchema,
  client: z.lazy(() => UserCreateNestedOneWithoutClientOrdersInputObjectSchema),
  productQty: z.lazy(() => ProductQtyCreateNestedManyWithoutOrderInputObjectSchema).optional()
}).strict();
export const OrdersCreateWithoutWorkerInputObjectSchema: z.ZodType<Prisma.OrdersCreateWithoutWorkerInput> = makeSchema() as unknown as z.ZodType<Prisma.OrdersCreateWithoutWorkerInput>;
export const OrdersCreateWithoutWorkerInputObjectZodSchema = makeSchema();
