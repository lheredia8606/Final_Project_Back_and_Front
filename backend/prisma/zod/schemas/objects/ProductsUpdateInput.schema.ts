import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { ProductTypeSchema } from '../enums/ProductType.schema';
import { EnumProductTypeFieldUpdateOperationsInputObjectSchema as EnumProductTypeFieldUpdateOperationsInputObjectSchema } from './EnumProductTypeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { ProductQtyUpdateManyWithoutProductNestedInputObjectSchema as ProductQtyUpdateManyWithoutProductNestedInputObjectSchema } from './ProductQtyUpdateManyWithoutProductNestedInput.schema'

const makeSchema = () => z.object({
  type: z.union([ProductTypeSchema, z.lazy(() => EnumProductTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  inStock: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  image: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  price: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  productQty: z.lazy(() => ProductQtyUpdateManyWithoutProductNestedInputObjectSchema).optional()
}).strict();
export const ProductsUpdateInputObjectSchema: z.ZodType<Prisma.ProductsUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductsUpdateInput>;
export const ProductsUpdateInputObjectZodSchema = makeSchema();
