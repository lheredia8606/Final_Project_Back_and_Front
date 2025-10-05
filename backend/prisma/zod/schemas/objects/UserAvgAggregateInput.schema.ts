import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const UserAvgAggregateInputObjectSchema: z.ZodType<Prisma.UserAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UserAvgAggregateInputType>;
export const UserAvgAggregateInputObjectZodSchema = makeSchema();
