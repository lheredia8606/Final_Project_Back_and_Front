import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { ProductTypeSchema } from '../enums/ProductType.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  type: ProductTypeSchema,
  name: z.string(),
  inStock: z.boolean(),
  image: z.string(),
  price: z.number()
}).strict();
export const ProductsUncheckedCreateWithoutProductQtyInputObjectSchema: z.ZodType<Prisma.ProductsUncheckedCreateWithoutProductQtyInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductsUncheckedCreateWithoutProductQtyInput>;
export const ProductsUncheckedCreateWithoutProductQtyInputObjectZodSchema = makeSchema();
