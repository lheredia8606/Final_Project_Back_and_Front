import type { Prisma } from '../../../generated/prisma';
import * as z from 'zod';
import { ProductQtyWhereInputObjectSchema as ProductQtyWhereInputObjectSchema } from './objects/ProductQtyWhereInput.schema';

export const ProductQtyDeleteManySchema: z.ZodType<Prisma.ProductQtyDeleteManyArgs> = z.object({ where: ProductQtyWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProductQtyDeleteManyArgs>;

export const ProductQtyDeleteManyZodSchema = z.object({ where: ProductQtyWhereInputObjectSchema.optional() }).strict();