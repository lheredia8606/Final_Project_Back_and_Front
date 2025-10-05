import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { OrderStatusSchema } from '../enums/OrderStatus.schema';
import { UserCreateNestedOneWithoutClientOrdersInputObjectSchema as UserCreateNestedOneWithoutClientOrdersInputObjectSchema } from './UserCreateNestedOneWithoutClientOrdersInput.schema';
import { UserCreateNestedOneWithoutWorkerOrdersInputObjectSchema as UserCreateNestedOneWithoutWorkerOrdersInputObjectSchema } from './UserCreateNestedOneWithoutWorkerOrdersInput.schema';
import { ProductQtyCreateNestedManyWithoutOrderInputObjectSchema as ProductQtyCreateNestedManyWithoutOrderInputObjectSchema } from './ProductQtyCreateNestedManyWithoutOrderInput.schema'

const makeSchema = () => z.object({
  deadLine: z.coerce.date().optional().nullable(),
  status: OrderStatusSchema,
  client: z.lazy(() => UserCreateNestedOneWithoutClientOrdersInputObjectSchema),
  worker: z.lazy(() => UserCreateNestedOneWithoutWorkerOrdersInputObjectSchema).optional(),
  productQty: z.lazy(() => ProductQtyCreateNestedManyWithoutOrderInputObjectSchema)
}).strict();
export const OrdersCreateInputObjectSchema: z.ZodType<Prisma.OrdersCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrdersCreateInput>;
export const OrdersCreateInputObjectZodSchema = makeSchema();
