import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ProductQtyOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ProductQtyOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductQtyOrderByRelationAggregateInput>;
export const ProductQtyOrderByRelationAggregateInputObjectZodSchema = makeSchema();
