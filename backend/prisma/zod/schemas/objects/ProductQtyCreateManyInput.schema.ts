import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  orderId: z.number().int(),
  productId: z.number().int(),
  qty: z.number().int()
}).strict();
export const ProductQtyCreateManyInputObjectSchema: z.ZodType<Prisma.ProductQtyCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductQtyCreateManyInput>;
export const ProductQtyCreateManyInputObjectZodSchema = makeSchema();
