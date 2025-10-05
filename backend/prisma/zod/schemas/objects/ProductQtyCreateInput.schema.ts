import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { OrdersCreateNestedOneWithoutProductQtyInputObjectSchema as OrdersCreateNestedOneWithoutProductQtyInputObjectSchema } from './OrdersCreateNestedOneWithoutProductQtyInput.schema';
import { ProductsCreateNestedOneWithoutProductQtyInputObjectSchema as ProductsCreateNestedOneWithoutProductQtyInputObjectSchema } from './ProductsCreateNestedOneWithoutProductQtyInput.schema'

const makeSchema = () => z.object({
  qty: z.number().int(),
  order: z.lazy(() => OrdersCreateNestedOneWithoutProductQtyInputObjectSchema),
  product: z.lazy(() => ProductsCreateNestedOneWithoutProductQtyInputObjectSchema)
}).strict();
export const ProductQtyCreateInputObjectSchema: z.ZodType<Prisma.ProductQtyCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductQtyCreateInput>;
export const ProductQtyCreateInputObjectZodSchema = makeSchema();
