import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { OrdersCountOutputTypeSelectObjectSchema as OrdersCountOutputTypeSelectObjectSchema } from './OrdersCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => OrdersCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const OrdersCountOutputTypeArgsObjectSchema = makeSchema();
export const OrdersCountOutputTypeArgsObjectZodSchema = makeSchema();
