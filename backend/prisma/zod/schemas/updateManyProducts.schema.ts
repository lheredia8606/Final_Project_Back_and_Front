import type { Prisma } from '../../../generated/prisma';
import * as z from 'zod';
import { ProductsUpdateManyMutationInputObjectSchema as ProductsUpdateManyMutationInputObjectSchema } from './objects/ProductsUpdateManyMutationInput.schema';
import { ProductsWhereInputObjectSchema as ProductsWhereInputObjectSchema } from './objects/ProductsWhereInput.schema';

export const ProductsUpdateManySchema: z.ZodType<Prisma.ProductsUpdateManyArgs> = z.object({ data: ProductsUpdateManyMutationInputObjectSchema, where: ProductsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProductsUpdateManyArgs>;

export const ProductsUpdateManyZodSchema = z.object({ data: ProductsUpdateManyMutationInputObjectSchema, where: ProductsWhereInputObjectSchema.optional() }).strict();