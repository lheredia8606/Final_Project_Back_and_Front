import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { OrdersOrderByRelationAggregateInputObjectSchema as OrdersOrderByRelationAggregateInputObjectSchema } from './OrdersOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  firstName: SortOrderSchema.optional(),
  lastName: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  phone: SortOrderSchema.optional(),
  isActive: SortOrderSchema.optional(),
  clientOrders: z.lazy(() => OrdersOrderByRelationAggregateInputObjectSchema).optional(),
  workerOrders: z.lazy(() => OrdersOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const UserOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserOrderByWithRelationInput>;
export const UserOrderByWithRelationInputObjectZodSchema = makeSchema();
