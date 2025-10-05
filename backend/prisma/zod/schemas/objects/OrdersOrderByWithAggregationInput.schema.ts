import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { OrdersCountOrderByAggregateInputObjectSchema as OrdersCountOrderByAggregateInputObjectSchema } from './OrdersCountOrderByAggregateInput.schema';
import { OrdersAvgOrderByAggregateInputObjectSchema as OrdersAvgOrderByAggregateInputObjectSchema } from './OrdersAvgOrderByAggregateInput.schema';
import { OrdersMaxOrderByAggregateInputObjectSchema as OrdersMaxOrderByAggregateInputObjectSchema } from './OrdersMaxOrderByAggregateInput.schema';
import { OrdersMinOrderByAggregateInputObjectSchema as OrdersMinOrderByAggregateInputObjectSchema } from './OrdersMinOrderByAggregateInput.schema';
import { OrdersSumOrderByAggregateInputObjectSchema as OrdersSumOrderByAggregateInputObjectSchema } from './OrdersSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional(),
  workerId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  deadLine: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  status: SortOrderSchema.optional(),
  _count: z.lazy(() => OrdersCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => OrdersAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => OrdersMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => OrdersMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => OrdersSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const OrdersOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.OrdersOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.OrdersOrderByWithAggregationInput>;
export const OrdersOrderByWithAggregationInputObjectZodSchema = makeSchema();
