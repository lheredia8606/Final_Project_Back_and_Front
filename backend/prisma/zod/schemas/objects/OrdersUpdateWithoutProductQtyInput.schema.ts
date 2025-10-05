import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { OrderStatusSchema } from '../enums/OrderStatus.schema';
import { EnumOrderStatusFieldUpdateOperationsInputObjectSchema as EnumOrderStatusFieldUpdateOperationsInputObjectSchema } from './EnumOrderStatusFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutClientOrdersNestedInputObjectSchema as UserUpdateOneRequiredWithoutClientOrdersNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutClientOrdersNestedInput.schema';
import { UserUpdateOneWithoutWorkerOrdersNestedInputObjectSchema as UserUpdateOneWithoutWorkerOrdersNestedInputObjectSchema } from './UserUpdateOneWithoutWorkerOrdersNestedInput.schema'

const makeSchema = () => z.object({
  deadLine: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  status: z.union([OrderStatusSchema, z.lazy(() => EnumOrderStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  client: z.lazy(() => UserUpdateOneRequiredWithoutClientOrdersNestedInputObjectSchema).optional(),
  worker: z.lazy(() => UserUpdateOneWithoutWorkerOrdersNestedInputObjectSchema).optional()
}).strict();
export const OrdersUpdateWithoutProductQtyInputObjectSchema: z.ZodType<Prisma.OrdersUpdateWithoutProductQtyInput> = makeSchema() as unknown as z.ZodType<Prisma.OrdersUpdateWithoutProductQtyInput>;
export const OrdersUpdateWithoutProductQtyInputObjectZodSchema = makeSchema();
