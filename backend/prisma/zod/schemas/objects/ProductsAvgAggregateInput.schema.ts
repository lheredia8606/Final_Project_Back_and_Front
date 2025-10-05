import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  price: z.literal(true).optional()
}).strict();
export const ProductsAvgAggregateInputObjectSchema: z.ZodType<Prisma.ProductsAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProductsAvgAggregateInputType>;
export const ProductsAvgAggregateInputObjectZodSchema = makeSchema();
