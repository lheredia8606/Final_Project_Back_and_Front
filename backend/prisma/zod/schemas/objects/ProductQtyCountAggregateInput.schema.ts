import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  orderId: z.literal(true).optional(),
  productId: z.literal(true).optional(),
  qty: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ProductQtyCountAggregateInputObjectSchema: z.ZodType<Prisma.ProductQtyCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProductQtyCountAggregateInputType>;
export const ProductQtyCountAggregateInputObjectZodSchema = makeSchema();
