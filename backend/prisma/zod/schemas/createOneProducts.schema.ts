import type { Prisma } from '../../../generated/prisma';
import * as z from 'zod';
import { ProductsSelectObjectSchema as ProductsSelectObjectSchema } from './objects/ProductsSelect.schema';
import { ProductsIncludeObjectSchema as ProductsIncludeObjectSchema } from './objects/ProductsInclude.schema';
import { ProductsCreateInputObjectSchema as ProductsCreateInputObjectSchema } from './objects/ProductsCreateInput.schema';
import { ProductsUncheckedCreateInputObjectSchema as ProductsUncheckedCreateInputObjectSchema } from './objects/ProductsUncheckedCreateInput.schema';

export const ProductsCreateOneSchema: z.ZodType<Prisma.ProductsCreateArgs> = z.object({ select: ProductsSelectObjectSchema.optional(), include: ProductsIncludeObjectSchema.optional(), data: z.union([ProductsCreateInputObjectSchema, ProductsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ProductsCreateArgs>;

export const ProductsCreateOneZodSchema = z.object({ select: ProductsSelectObjectSchema.optional(), include: ProductsIncludeObjectSchema.optional(), data: z.union([ProductsCreateInputObjectSchema, ProductsUncheckedCreateInputObjectSchema]) }).strict();