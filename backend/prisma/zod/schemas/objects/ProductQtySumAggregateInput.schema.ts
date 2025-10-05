import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  orderId: z.literal(true).optional(),
  productId: z.literal(true).optional(),
  qty: z.literal(true).optional()
}).strict();
export const ProductQtySumAggregateInputObjectSchema: z.ZodType<Prisma.ProductQtySumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProductQtySumAggregateInputType>;
export const ProductQtySumAggregateInputObjectZodSchema = makeSchema();
