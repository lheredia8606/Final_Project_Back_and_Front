import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { ProductTypeSchema } from '../enums/ProductType.schema';
import { ProductQtyUncheckedCreateNestedManyWithoutProductInputObjectSchema as ProductQtyUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './ProductQtyUncheckedCreateNestedManyWithoutProductInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  type: ProductTypeSchema,
  name: z.string(),
  inStock: z.boolean(),
  image: z.string(),
  price: z.number(),
  productQty: z.lazy(() => ProductQtyUncheckedCreateNestedManyWithoutProductInputObjectSchema)
}).strict();
export const ProductsUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ProductsUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductsUncheckedCreateInput>;
export const ProductsUncheckedCreateInputObjectZodSchema = makeSchema();
