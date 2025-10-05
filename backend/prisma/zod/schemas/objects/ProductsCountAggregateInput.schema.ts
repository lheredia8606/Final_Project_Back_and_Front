import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  type: z.literal(true).optional(),
  name: z.literal(true).optional(),
  inStock: z.literal(true).optional(),
  image: z.literal(true).optional(),
  price: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ProductsCountAggregateInputObjectSchema: z.ZodType<Prisma.ProductsCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProductsCountAggregateInputType>;
export const ProductsCountAggregateInputObjectZodSchema = makeSchema();
