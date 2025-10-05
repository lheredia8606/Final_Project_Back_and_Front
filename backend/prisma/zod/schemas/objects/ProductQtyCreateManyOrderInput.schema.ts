import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  productId: z.number().int(),
  qty: z.number().int()
}).strict();
export const ProductQtyCreateManyOrderInputObjectSchema: z.ZodType<Prisma.ProductQtyCreateManyOrderInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductQtyCreateManyOrderInput>;
export const ProductQtyCreateManyOrderInputObjectZodSchema = makeSchema();
