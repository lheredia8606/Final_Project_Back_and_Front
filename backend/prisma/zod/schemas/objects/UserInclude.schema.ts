import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { OrdersFindManySchema as OrdersFindManySchema } from '../findManyOrders.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  clientOrders: z.union([z.boolean(), z.lazy(() => OrdersFindManySchema)]).optional(),
  workerOrders: z.union([z.boolean(), z.lazy(() => OrdersFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserIncludeObjectSchema: z.ZodType<Prisma.UserInclude> = makeSchema() as unknown as z.ZodType<Prisma.UserInclude>;
export const UserIncludeObjectZodSchema = makeSchema();
