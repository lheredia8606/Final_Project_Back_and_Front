import type { Prisma } from '../../../generated/prisma';
import * as z from 'zod';
import { ProductsSelectObjectSchema as ProductsSelectObjectSchema } from './objects/ProductsSelect.schema';
import { ProductsIncludeObjectSchema as ProductsIncludeObjectSchema } from './objects/ProductsInclude.schema';
import { ProductsWhereUniqueInputObjectSchema as ProductsWhereUniqueInputObjectSchema } from './objects/ProductsWhereUniqueInput.schema';

export const ProductsFindUniqueOrThrowSchema: z.ZodType<Prisma.ProductsFindUniqueOrThrowArgs> = z.object({ select: ProductsSelectObjectSchema.optional(), include: ProductsIncludeObjectSchema.optional(), where: ProductsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProductsFindUniqueOrThrowArgs>;

export const ProductsFindUniqueOrThrowZodSchema = z.object({ select: ProductsSelectObjectSchema.optional(), include: ProductsIncludeObjectSchema.optional(), where: ProductsWhereUniqueInputObjectSchema }).strict();