import type { Prisma } from '../../../generated/prisma';
import * as z from 'zod';
import { ProductsSelectObjectSchema as ProductsSelectObjectSchema } from './objects/ProductsSelect.schema';
import { ProductsUpdateManyMutationInputObjectSchema as ProductsUpdateManyMutationInputObjectSchema } from './objects/ProductsUpdateManyMutationInput.schema';
import { ProductsWhereInputObjectSchema as ProductsWhereInputObjectSchema } from './objects/ProductsWhereInput.schema';

export const ProductsUpdateManyAndReturnSchema: z.ZodType<Prisma.ProductsUpdateManyAndReturnArgs> = z.object({ select: ProductsSelectObjectSchema.optional(), data: ProductsUpdateManyMutationInputObjectSchema, where: ProductsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProductsUpdateManyAndReturnArgs>;

export const ProductsUpdateManyAndReturnZodSchema = z.object({ select: ProductsSelectObjectSchema.optional(), data: ProductsUpdateManyMutationInputObjectSchema, where: ProductsWhereInputObjectSchema.optional() }).strict();