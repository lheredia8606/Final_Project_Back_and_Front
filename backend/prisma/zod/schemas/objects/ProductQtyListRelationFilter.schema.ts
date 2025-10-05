import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { ProductQtyWhereInputObjectSchema as ProductQtyWhereInputObjectSchema } from './ProductQtyWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ProductQtyWhereInputObjectSchema).optional(),
  some: z.lazy(() => ProductQtyWhereInputObjectSchema).optional(),
  none: z.lazy(() => ProductQtyWhereInputObjectSchema).optional()
}).strict();
export const ProductQtyListRelationFilterObjectSchema: z.ZodType<Prisma.ProductQtyListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ProductQtyListRelationFilter>;
export const ProductQtyListRelationFilterObjectZodSchema = makeSchema();
