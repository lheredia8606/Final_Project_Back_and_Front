import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { ProductQtyFindManySchema as ProductQtyFindManySchema } from '../findManyProductQty.schema';
import { OrdersCountOutputTypeArgsObjectSchema as OrdersCountOutputTypeArgsObjectSchema } from './OrdersCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  client: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  worker: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  productQty: z.union([z.boolean(), z.lazy(() => ProductQtyFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => OrdersCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const OrdersIncludeObjectSchema: z.ZodType<Prisma.OrdersInclude> = makeSchema() as unknown as z.ZodType<Prisma.OrdersInclude>;
export const OrdersIncludeObjectZodSchema = makeSchema();
