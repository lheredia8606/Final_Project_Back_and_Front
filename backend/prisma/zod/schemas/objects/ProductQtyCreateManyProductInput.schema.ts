import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  orderId: z.number().int(),
  qty: z.number().int()
}).strict();
export const ProductQtyCreateManyProductInputObjectSchema: z.ZodType<Prisma.ProductQtyCreateManyProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductQtyCreateManyProductInput>;
export const ProductQtyCreateManyProductInputObjectZodSchema = makeSchema();
