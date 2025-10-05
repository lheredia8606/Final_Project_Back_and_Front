import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { OrderStatusSchema } from '../enums/OrderStatus.schema';
import { ProductQtyUncheckedCreateNestedManyWithoutOrderInputObjectSchema as ProductQtyUncheckedCreateNestedManyWithoutOrderInputObjectSchema } from './ProductQtyUncheckedCreateNestedManyWithoutOrderInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  workerId: z.number().int().optional().nullable(),
  deadLine: z.coerce.date().optional().nullable(),
  status: OrderStatusSchema,
  productQty: z.lazy(() => ProductQtyUncheckedCreateNestedManyWithoutOrderInputObjectSchema).optional()
}).strict();
export const OrdersUncheckedCreateWithoutClientInputObjectSchema: z.ZodType<Prisma.OrdersUncheckedCreateWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.OrdersUncheckedCreateWithoutClientInput>;
export const OrdersUncheckedCreateWithoutClientInputObjectZodSchema = makeSchema();
