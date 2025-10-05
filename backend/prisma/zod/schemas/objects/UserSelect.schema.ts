import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { OrdersFindManySchema as OrdersFindManySchema } from '../findManyOrders.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  firstName: z.boolean().optional(),
  lastName: z.boolean().optional(),
  email: z.boolean().optional(),
  passwordHash: z.boolean().optional(),
  role: z.boolean().optional(),
  phone: z.boolean().optional(),
  isActive: z.boolean().optional(),
  clientOrders: z.union([z.boolean(), z.lazy(() => OrdersFindManySchema)]).optional(),
  workerOrders: z.union([z.boolean(), z.lazy(() => OrdersFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserSelectObjectSchema: z.ZodType<Prisma.UserSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserSelect>;
export const UserSelectObjectZodSchema = makeSchema();
