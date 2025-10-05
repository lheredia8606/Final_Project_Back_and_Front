import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { ProductTypeSchema } from '../enums/ProductType.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumProductTypeFilterObjectSchema as NestedEnumProductTypeFilterObjectSchema } from './NestedEnumProductTypeFilter.schema'

const nestedenumproducttypewithaggregatesfilterSchema = z.object({
  equals: ProductTypeSchema.optional(),
  in: ProductTypeSchema.array().optional(),
  notIn: ProductTypeSchema.array().optional(),
  not: z.union([ProductTypeSchema, z.lazy(() => NestedEnumProductTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumProductTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumProductTypeFilterObjectSchema).optional()
}).strict();
export const NestedEnumProductTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumProductTypeWithAggregatesFilter> = nestedenumproducttypewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumProductTypeWithAggregatesFilter>;
export const NestedEnumProductTypeWithAggregatesFilterObjectZodSchema = nestedenumproducttypewithaggregatesfilterSchema;
