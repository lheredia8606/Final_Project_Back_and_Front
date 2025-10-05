import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { ProductsCreateNestedOneWithoutProductQtyInputObjectSchema as ProductsCreateNestedOneWithoutProductQtyInputObjectSchema } from './ProductsCreateNestedOneWithoutProductQtyInput.schema'

const makeSchema = () => z.object({
  qty: z.number().int(),
  product: z.lazy(() => ProductsCreateNestedOneWithoutProductQtyInputObjectSchema)
}).strict();
export const ProductQtyCreateWithoutOrderInputObjectSchema: z.ZodType<Prisma.ProductQtyCreateWithoutOrderInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductQtyCreateWithoutOrderInput>;
export const ProductQtyCreateWithoutOrderInputObjectZodSchema = makeSchema();
