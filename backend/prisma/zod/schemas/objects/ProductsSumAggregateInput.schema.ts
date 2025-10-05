import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  price: z.literal(true).optional()
}).strict();
export const ProductsSumAggregateInputObjectSchema: z.ZodType<Prisma.ProductsSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProductsSumAggregateInputType>;
export const ProductsSumAggregateInputObjectZodSchema = makeSchema();
