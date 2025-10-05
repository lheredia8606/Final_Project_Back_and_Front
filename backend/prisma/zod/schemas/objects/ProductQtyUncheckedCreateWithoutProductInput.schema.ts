import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  orderId: z.number().int(),
  qty: z.number().int()
}).strict();
export const ProductQtyUncheckedCreateWithoutProductInputObjectSchema: z.ZodType<Prisma.ProductQtyUncheckedCreateWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductQtyUncheckedCreateWithoutProductInput>;
export const ProductQtyUncheckedCreateWithoutProductInputObjectZodSchema = makeSchema();
