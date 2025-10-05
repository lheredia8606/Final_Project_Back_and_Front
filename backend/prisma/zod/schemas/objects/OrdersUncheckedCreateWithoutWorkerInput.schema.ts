import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { OrderStatusSchema } from '../enums/OrderStatus.schema';
import { ProductQtyUncheckedCreateNestedManyWithoutOrderInputObjectSchema as ProductQtyUncheckedCreateNestedManyWithoutOrderInputObjectSchema } from './ProductQtyUncheckedCreateNestedManyWithoutOrderInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  clientId: z.number().int(),
  deadLine: z.coerce.date().optional().nullable(),
  status: OrderStatusSchema,
  productQty: z.lazy(() => ProductQtyUncheckedCreateNestedManyWithoutOrderInputObjectSchema).optional()
}).strict();
export const OrdersUncheckedCreateWithoutWorkerInputObjectSchema: z.ZodType<Prisma.OrdersUncheckedCreateWithoutWorkerInput> = makeSchema() as unknown as z.ZodType<Prisma.OrdersUncheckedCreateWithoutWorkerInput>;
export const OrdersUncheckedCreateWithoutWorkerInputObjectZodSchema = makeSchema();
