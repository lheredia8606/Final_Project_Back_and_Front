import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema'

const productqtyscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ProductQtyScalarWhereInputObjectSchema), z.lazy(() => ProductQtyScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProductQtyScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProductQtyScalarWhereInputObjectSchema), z.lazy(() => ProductQtyScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  orderId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  productId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  qty: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const ProductQtyScalarWhereInputObjectSchema: z.ZodType<Prisma.ProductQtyScalarWhereInput> = productqtyscalarwhereinputSchema as unknown as z.ZodType<Prisma.ProductQtyScalarWhereInput>;
export const ProductQtyScalarWhereInputObjectZodSchema = productqtyscalarwhereinputSchema;
