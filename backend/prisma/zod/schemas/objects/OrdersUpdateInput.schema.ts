import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { OrderStatusSchema } from '../enums/OrderStatus.schema';
import { EnumOrderStatusFieldUpdateOperationsInputObjectSchema as EnumOrderStatusFieldUpdateOperationsInputObjectSchema } from './EnumOrderStatusFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutClientOrdersNestedInputObjectSchema as UserUpdateOneRequiredWithoutClientOrdersNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutClientOrdersNestedInput.schema';
import { UserUpdateOneWithoutWorkerOrdersNestedInputObjectSchema as UserUpdateOneWithoutWorkerOrdersNestedInputObjectSchema } from './UserUpdateOneWithoutWorkerOrdersNestedInput.schema';
import { ProductQtyUpdateManyWithoutOrderNestedInputObjectSchema as ProductQtyUpdateManyWithoutOrderNestedInputObjectSchema } from './ProductQtyUpdateManyWithoutOrderNestedInput.schema'

const makeSchema = () => z.object({
  deadLine: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  status: z.union([OrderStatusSchema, z.lazy(() => EnumOrderStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  client: z.lazy(() => UserUpdateOneRequiredWithoutClientOrdersNestedInputObjectSchema).optional(),
  worker: z.lazy(() => UserUpdateOneWithoutWorkerOrdersNestedInputObjectSchema).optional(),
  productQty: z.lazy(() => ProductQtyUpdateManyWithoutOrderNestedInputObjectSchema).optional()
}).strict();
export const OrdersUpdateInputObjectSchema: z.ZodType<Prisma.OrdersUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrdersUpdateInput>;
export const OrdersUpdateInputObjectZodSchema = makeSchema();
