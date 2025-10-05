import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  productId: z.number().int(),
  qty: z.number().int()
}).strict();
export const ProductQtyUncheckedCreateWithoutOrderInputObjectSchema: z.ZodType<Prisma.ProductQtyUncheckedCreateWithoutOrderInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductQtyUncheckedCreateWithoutOrderInput>;
export const ProductQtyUncheckedCreateWithoutOrderInputObjectZodSchema = makeSchema();
