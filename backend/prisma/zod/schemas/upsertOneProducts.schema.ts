import type { Prisma } from '../../../generated/prisma';
import * as z from 'zod';
import { ProductsSelectObjectSchema as ProductsSelectObjectSchema } from './objects/ProductsSelect.schema';
import { ProductsIncludeObjectSchema as ProductsIncludeObjectSchema } from './objects/ProductsInclude.schema';
import { ProductsWhereUniqueInputObjectSchema as ProductsWhereUniqueInputObjectSchema } from './objects/ProductsWhereUniqueInput.schema';
import { ProductsCreateInputObjectSchema as ProductsCreateInputObjectSchema } from './objects/ProductsCreateInput.schema';
import { ProductsUncheckedCreateInputObjectSchema as ProductsUncheckedCreateInputObjectSchema } from './objects/ProductsUncheckedCreateInput.schema';
import { ProductsUpdateInputObjectSchema as ProductsUpdateInputObjectSchema } from './objects/ProductsUpdateInput.schema';
import { ProductsUncheckedUpdateInputObjectSchema as ProductsUncheckedUpdateInputObjectSchema } from './objects/ProductsUncheckedUpdateInput.schema';

export const ProductsUpsertOneSchema: z.ZodType<Prisma.ProductsUpsertArgs> = z.object({ select: ProductsSelectObjectSchema.optional(), include: ProductsIncludeObjectSchema.optional(), where: ProductsWhereUniqueInputObjectSchema, create: z.union([ ProductsCreateInputObjectSchema, ProductsUncheckedCreateInputObjectSchema ]), update: z.union([ ProductsUpdateInputObjectSchema, ProductsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ProductsUpsertArgs>;

export const ProductsUpsertOneZodSchema = z.object({ select: ProductsSelectObjectSchema.optional(), include: ProductsIncludeObjectSchema.optional(), where: ProductsWhereUniqueInputObjectSchema, create: z.union([ ProductsCreateInputObjectSchema, ProductsUncheckedCreateInputObjectSchema ]), update: z.union([ ProductsUpdateInputObjectSchema, ProductsUncheckedUpdateInputObjectSchema ]) }).strict();