import type { Prisma } from '../../../generated/prisma';
import * as z from 'zod';
import { ProductsWhereInputObjectSchema as ProductsWhereInputObjectSchema } from './objects/ProductsWhereInput.schema';

export const ProductsDeleteManySchema: z.ZodType<Prisma.ProductsDeleteManyArgs> = z.object({ where: ProductsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProductsDeleteManyArgs>;

export const ProductsDeleteManyZodSchema = z.object({ where: ProductsWhereInputObjectSchema.optional() }).strict();