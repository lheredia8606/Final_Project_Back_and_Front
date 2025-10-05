import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'

const productqtyscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ProductQtyScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProductQtyScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProductQtyScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProductQtyScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProductQtyScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  orderId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  productId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  qty: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const ProductQtyScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ProductQtyScalarWhereWithAggregatesInput> = productqtyscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ProductQtyScalarWhereWithAggregatesInput>;
export const ProductQtyScalarWhereWithAggregatesInputObjectZodSchema = productqtyscalarwherewithaggregatesinputSchema;
