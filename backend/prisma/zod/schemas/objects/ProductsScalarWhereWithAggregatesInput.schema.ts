import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { EnumProductTypeWithAggregatesFilterObjectSchema as EnumProductTypeWithAggregatesFilterObjectSchema } from './EnumProductTypeWithAggregatesFilter.schema';
import { ProductTypeSchema } from '../enums/ProductType.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema as FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema'

const productsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ProductsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProductsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProductsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProductsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProductsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  type: z.union([z.lazy(() => EnumProductTypeWithAggregatesFilterObjectSchema), ProductTypeSchema]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  inStock: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  image: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  price: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional()
}).strict();
export const ProductsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ProductsScalarWhereWithAggregatesInput> = productsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ProductsScalarWhereWithAggregatesInput>;
export const ProductsScalarWhereWithAggregatesInputObjectZodSchema = productsscalarwherewithaggregatesinputSchema;
