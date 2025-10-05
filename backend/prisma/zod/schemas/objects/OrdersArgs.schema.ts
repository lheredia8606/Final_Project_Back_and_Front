import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { OrdersSelectObjectSchema as OrdersSelectObjectSchema } from './OrdersSelect.schema';
import { OrdersIncludeObjectSchema as OrdersIncludeObjectSchema } from './OrdersInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => OrdersSelectObjectSchema).optional(),
  include: z.lazy(() => OrdersIncludeObjectSchema).optional()
}).strict();
export const OrdersArgsObjectSchema = makeSchema();
export const OrdersArgsObjectZodSchema = makeSchema();
