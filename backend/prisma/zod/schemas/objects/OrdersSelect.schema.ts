import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { ProductQtyFindManySchema as ProductQtyFindManySchema } from '../findManyProductQty.schema';
import { OrdersCountOutputTypeArgsObjectSchema as OrdersCountOutputTypeArgsObjectSchema } from './OrdersCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  clientId: z.boolean().optional(),
  client: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  workerId: z.boolean().optional(),
  worker: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  deadLine: z.boolean().optional(),
  status: z.boolean().optional(),
  productQty: z.union([z.boolean(), z.lazy(() => ProductQtyFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => OrdersCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const OrdersSelectObjectSchema: z.ZodType<Prisma.OrdersSelect> = makeSchema() as unknown as z.ZodType<Prisma.OrdersSelect>;
export const OrdersSelectObjectZodSchema = makeSchema();
