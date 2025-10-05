import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  orderId: z.number().int(),
  productId: z.number().int(),
  qty: z.number().int()
}).strict();
export const ProductQtyUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ProductQtyUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductQtyUncheckedCreateInput>;
export const ProductQtyUncheckedCreateInputObjectZodSchema = makeSchema();
