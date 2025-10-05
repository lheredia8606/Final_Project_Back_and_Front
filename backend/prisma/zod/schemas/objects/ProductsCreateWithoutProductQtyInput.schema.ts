import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { ProductTypeSchema } from '../enums/ProductType.schema'

const makeSchema = () => z.object({
  type: ProductTypeSchema,
  name: z.string(),
  inStock: z.boolean(),
  image: z.string(),
  price: z.number()
}).strict();
export const ProductsCreateWithoutProductQtyInputObjectSchema: z.ZodType<Prisma.ProductsCreateWithoutProductQtyInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductsCreateWithoutProductQtyInput>;
export const ProductsCreateWithoutProductQtyInputObjectZodSchema = makeSchema();
