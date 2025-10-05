import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const UserAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAvgOrderByAggregateInput>;
export const UserAvgOrderByAggregateInputObjectZodSchema = makeSchema();
