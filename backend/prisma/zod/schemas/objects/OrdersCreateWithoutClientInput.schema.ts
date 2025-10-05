import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { OrderStatusSchema } from '../enums/OrderStatus.schema';
import { UserCreateNestedOneWithoutWorkerOrdersInputObjectSchema as UserCreateNestedOneWithoutWorkerOrdersInputObjectSchema } from './UserCreateNestedOneWithoutWorkerOrdersInput.schema';
import { ProductQtyCreateNestedManyWithoutOrderInputObjectSchema as ProductQtyCreateNestedManyWithoutOrderInputObjectSchema } from './ProductQtyCreateNestedManyWithoutOrderInput.schema'

const makeSchema = () => z.object({
  deadLine: z.coerce.date().optional().nullable(),
  status: OrderStatusSchema,
  worker: z.lazy(() => UserCreateNestedOneWithoutWorkerOrdersInputObjectSchema).optional(),
  productQty: z.lazy(() => ProductQtyCreateNestedManyWithoutOrderInputObjectSchema).optional()
}).strict();
export const OrdersCreateWithoutClientInputObjectSchema: z.ZodType<Prisma.OrdersCreateWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.OrdersCreateWithoutClientInput>;
export const OrdersCreateWithoutClientInputObjectZodSchema = makeSchema();
