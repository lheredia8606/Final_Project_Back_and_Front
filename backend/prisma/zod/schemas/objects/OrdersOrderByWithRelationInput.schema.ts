import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { ProductQtyOrderByRelationAggregateInputObjectSchema as ProductQtyOrderByRelationAggregateInputObjectSchema } from './ProductQtyOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional(),
  workerId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  deadLine: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  status: SortOrderSchema.optional(),
  client: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  worker: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  productQty: z.lazy(() => ProductQtyOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const OrdersOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.OrdersOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.OrdersOrderByWithRelationInput>;
export const OrdersOrderByWithRelationInputObjectZodSchema = makeSchema();
