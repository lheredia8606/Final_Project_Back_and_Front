import type { Prisma } from '../../../generated/prisma';
import * as z from 'zod';
import { ProductsSelectObjectSchema as ProductsSelectObjectSchema } from './objects/ProductsSelect.schema';
import { ProductsIncludeObjectSchema as ProductsIncludeObjectSchema } from './objects/ProductsInclude.schema';
import { ProductsUpdateInputObjectSchema as ProductsUpdateInputObjectSchema } from './objects/ProductsUpdateInput.schema';
import { ProductsUncheckedUpdateInputObjectSchema as ProductsUncheckedUpdateInputObjectSchema } from './objects/ProductsUncheckedUpdateInput.schema';
import { ProductsWhereUniqueInputObjectSchema as ProductsWhereUniqueInputObjectSchema } from './objects/ProductsWhereUniqueInput.schema';

export const ProductsUpdateOneSchema: z.ZodType<Prisma.ProductsUpdateArgs> = z.object({ select: ProductsSelectObjectSchema.optional(), include: ProductsIncludeObjectSchema.optional(), data: z.union([ProductsUpdateInputObjectSchema, ProductsUncheckedUpdateInputObjectSchema]), where: ProductsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProductsUpdateArgs>;

export const ProductsUpdateOneZodSchema = z.object({ select: ProductsSelectObjectSchema.optional(), include: ProductsIncludeObjectSchema.optional(), data: z.union([ProductsUpdateInputObjectSchema, ProductsUncheckedUpdateInputObjectSchema]), where: ProductsWhereUniqueInputObjectSchema }).strict();