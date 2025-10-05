import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { OrdersWhereInputObjectSchema as OrdersWhereInputObjectSchema } from './OrdersWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => OrdersWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => OrdersWhereInputObjectSchema).optional()
}).strict();
export const OrdersScalarRelationFilterObjectSchema: z.ZodType<Prisma.OrdersScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.OrdersScalarRelationFilter>;
export const OrdersScalarRelationFilterObjectZodSchema = makeSchema();
