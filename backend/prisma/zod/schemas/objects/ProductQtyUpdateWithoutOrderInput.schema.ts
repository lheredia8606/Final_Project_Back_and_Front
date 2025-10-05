import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { ProductsUpdateOneRequiredWithoutProductQtyNestedInputObjectSchema as ProductsUpdateOneRequiredWithoutProductQtyNestedInputObjectSchema } from './ProductsUpdateOneRequiredWithoutProductQtyNestedInput.schema'

const makeSchema = () => z.object({
  qty: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  product: z.lazy(() => ProductsUpdateOneRequiredWithoutProductQtyNestedInputObjectSchema).optional()
}).strict();
export const ProductQtyUpdateWithoutOrderInputObjectSchema: z.ZodType<Prisma.ProductQtyUpdateWithoutOrderInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductQtyUpdateWithoutOrderInput>;
export const ProductQtyUpdateWithoutOrderInputObjectZodSchema = makeSchema();
