import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { OrdersWhereInputObjectSchema as OrdersWhereInputObjectSchema } from './OrdersWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => OrdersWhereInputObjectSchema).optional(),
  some: z.lazy(() => OrdersWhereInputObjectSchema).optional(),
  none: z.lazy(() => OrdersWhereInputObjectSchema).optional()
}).strict();
export const OrdersListRelationFilterObjectSchema: z.ZodType<Prisma.OrdersListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.OrdersListRelationFilter>;
export const OrdersListRelationFilterObjectZodSchema = makeSchema();
