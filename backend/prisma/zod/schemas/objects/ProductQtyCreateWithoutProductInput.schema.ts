import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { OrdersCreateNestedOneWithoutProductQtyInputObjectSchema as OrdersCreateNestedOneWithoutProductQtyInputObjectSchema } from './OrdersCreateNestedOneWithoutProductQtyInput.schema'

const makeSchema = () => z.object({
  qty: z.number().int(),
  order: z.lazy(() => OrdersCreateNestedOneWithoutProductQtyInputObjectSchema)
}).strict();
export const ProductQtyCreateWithoutProductInputObjectSchema: z.ZodType<Prisma.ProductQtyCreateWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductQtyCreateWithoutProductInput>;
export const ProductQtyCreateWithoutProductInputObjectZodSchema = makeSchema();
