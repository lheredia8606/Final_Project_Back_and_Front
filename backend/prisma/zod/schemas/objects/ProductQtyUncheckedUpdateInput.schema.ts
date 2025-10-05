import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  orderId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  productId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  qty: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ProductQtyUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.ProductQtyUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductQtyUncheckedUpdateInput>;
export const ProductQtyUncheckedUpdateInputObjectZodSchema = makeSchema();
