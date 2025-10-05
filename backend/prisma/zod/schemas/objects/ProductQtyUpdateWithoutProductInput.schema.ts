import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { OrdersUpdateOneRequiredWithoutProductQtyNestedInputObjectSchema as OrdersUpdateOneRequiredWithoutProductQtyNestedInputObjectSchema } from './OrdersUpdateOneRequiredWithoutProductQtyNestedInput.schema'

const makeSchema = () => z.object({
  qty: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  order: z.lazy(() => OrdersUpdateOneRequiredWithoutProductQtyNestedInputObjectSchema).optional()
}).strict();
export const ProductQtyUpdateWithoutProductInputObjectSchema: z.ZodType<Prisma.ProductQtyUpdateWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductQtyUpdateWithoutProductInput>;
export const ProductQtyUpdateWithoutProductInputObjectZodSchema = makeSchema();
