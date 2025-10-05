import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';


const makeSchema = () => z.object({
  productQty: z.boolean().optional()
}).strict();
export const OrdersCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.OrdersCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.OrdersCountOutputTypeSelect>;
export const OrdersCountOutputTypeSelectObjectZodSchema = makeSchema();
