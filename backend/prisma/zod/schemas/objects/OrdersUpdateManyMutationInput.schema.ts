import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { OrderStatusSchema } from '../enums/OrderStatus.schema';
import { EnumOrderStatusFieldUpdateOperationsInputObjectSchema as EnumOrderStatusFieldUpdateOperationsInputObjectSchema } from './EnumOrderStatusFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  deadLine: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  status: z.union([OrderStatusSchema, z.lazy(() => EnumOrderStatusFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const OrdersUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.OrdersUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.OrdersUpdateManyMutationInput>;
export const OrdersUpdateManyMutationInputObjectZodSchema = makeSchema();
