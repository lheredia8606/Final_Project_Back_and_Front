import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  orderId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  qty: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ProductQtyUncheckedUpdateWithoutProductInputObjectSchema: z.ZodType<Prisma.ProductQtyUncheckedUpdateWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductQtyUncheckedUpdateWithoutProductInput>;
export const ProductQtyUncheckedUpdateWithoutProductInputObjectZodSchema = makeSchema();
