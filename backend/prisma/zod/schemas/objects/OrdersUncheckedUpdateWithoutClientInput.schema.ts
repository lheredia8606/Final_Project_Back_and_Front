import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { OrderStatusSchema } from '../enums/OrderStatus.schema';
import { EnumOrderStatusFieldUpdateOperationsInputObjectSchema as EnumOrderStatusFieldUpdateOperationsInputObjectSchema } from './EnumOrderStatusFieldUpdateOperationsInput.schema';
import { ProductQtyUncheckedUpdateManyWithoutOrderNestedInputObjectSchema as ProductQtyUncheckedUpdateManyWithoutOrderNestedInputObjectSchema } from './ProductQtyUncheckedUpdateManyWithoutOrderNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  workerId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  deadLine: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  status: z.union([OrderStatusSchema, z.lazy(() => EnumOrderStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  productQty: z.lazy(() => ProductQtyUncheckedUpdateManyWithoutOrderNestedInputObjectSchema).optional()
}).strict();
export const OrdersUncheckedUpdateWithoutClientInputObjectSchema: z.ZodType<Prisma.OrdersUncheckedUpdateWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.OrdersUncheckedUpdateWithoutClientInput>;
export const OrdersUncheckedUpdateWithoutClientInputObjectZodSchema = makeSchema();
