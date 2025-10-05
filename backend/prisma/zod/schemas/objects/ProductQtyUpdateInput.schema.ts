import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { OrdersUpdateOneRequiredWithoutProductQtyNestedInputObjectSchema as OrdersUpdateOneRequiredWithoutProductQtyNestedInputObjectSchema } from './OrdersUpdateOneRequiredWithoutProductQtyNestedInput.schema';
import { ProductsUpdateOneRequiredWithoutProductQtyNestedInputObjectSchema as ProductsUpdateOneRequiredWithoutProductQtyNestedInputObjectSchema } from './ProductsUpdateOneRequiredWithoutProductQtyNestedInput.schema'

const makeSchema = () => z.object({
  qty: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  order: z.lazy(() => OrdersUpdateOneRequiredWithoutProductQtyNestedInputObjectSchema).optional(),
  product: z.lazy(() => ProductsUpdateOneRequiredWithoutProductQtyNestedInputObjectSchema).optional()
}).strict();
export const ProductQtyUpdateInputObjectSchema: z.ZodType<Prisma.ProductQtyUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductQtyUpdateInput>;
export const ProductQtyUpdateInputObjectZodSchema = makeSchema();
