import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { EnumProductTypeFilterObjectSchema as EnumProductTypeFilterObjectSchema } from './EnumProductTypeFilter.schema';
import { ProductTypeSchema } from '../enums/ProductType.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { ProductQtyListRelationFilterObjectSchema as ProductQtyListRelationFilterObjectSchema } from './ProductQtyListRelationFilter.schema'

const productswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ProductsWhereInputObjectSchema), z.lazy(() => ProductsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProductsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProductsWhereInputObjectSchema), z.lazy(() => ProductsWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  type: z.union([z.lazy(() => EnumProductTypeFilterObjectSchema), ProductTypeSchema]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  inStock: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  image: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  price: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  productQty: z.lazy(() => ProductQtyListRelationFilterObjectSchema).optional()
}).strict();
export const ProductsWhereInputObjectSchema: z.ZodType<Prisma.ProductsWhereInput> = productswhereinputSchema as unknown as z.ZodType<Prisma.ProductsWhereInput>;
export const ProductsWhereInputObjectZodSchema = productswhereinputSchema;
