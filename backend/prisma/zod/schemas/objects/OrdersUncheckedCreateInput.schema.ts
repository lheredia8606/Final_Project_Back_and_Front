import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { OrderStatusSchema } from '../enums/OrderStatus.schema';
import { ProductQtyUncheckedCreateNestedManyWithoutOrderInputObjectSchema as ProductQtyUncheckedCreateNestedManyWithoutOrderInputObjectSchema } from './ProductQtyUncheckedCreateNestedManyWithoutOrderInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  clientId: z.number().int(),
  workerId: z.number().int().optional().nullable(),
  deadLine: z.coerce.date().optional().nullable(),
  status: OrderStatusSchema,
  productQty: z.lazy(() => ProductQtyUncheckedCreateNestedManyWithoutOrderInputObjectSchema)
}).strict();
export const OrdersUncheckedCreateInputObjectSchema: z.ZodType<Prisma.OrdersUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrdersUncheckedCreateInput>;
export const OrdersUncheckedCreateInputObjectZodSchema = makeSchema();
