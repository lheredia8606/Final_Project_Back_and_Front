import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  productId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  qty: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ProductQtyUncheckedUpdateManyWithoutOrderInputObjectSchema: z.ZodType<Prisma.ProductQtyUncheckedUpdateManyWithoutOrderInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductQtyUncheckedUpdateManyWithoutOrderInput>;
export const ProductQtyUncheckedUpdateManyWithoutOrderInputObjectZodSchema = makeSchema();
