import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { ProductTypeSchema } from '../enums/ProductType.schema';
import { ProductQtyCreateNestedManyWithoutProductInputObjectSchema as ProductQtyCreateNestedManyWithoutProductInputObjectSchema } from './ProductQtyCreateNestedManyWithoutProductInput.schema'

const makeSchema = () => z.object({
  type: ProductTypeSchema,
  name: z.string(),
  inStock: z.boolean(),
  image: z.string(),
  price: z.number(),
  productQty: z.lazy(() => ProductQtyCreateNestedManyWithoutProductInputObjectSchema)
}).strict();
export const ProductsCreateInputObjectSchema: z.ZodType<Prisma.ProductsCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductsCreateInput>;
export const ProductsCreateInputObjectZodSchema = makeSchema();
