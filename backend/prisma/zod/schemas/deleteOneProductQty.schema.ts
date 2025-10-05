import type { Prisma } from '../../../generated/prisma';
import * as z from 'zod';
import { ProductQtySelectObjectSchema as ProductQtySelectObjectSchema } from './objects/ProductQtySelect.schema';
import { ProductQtyIncludeObjectSchema as ProductQtyIncludeObjectSchema } from './objects/ProductQtyInclude.schema';
import { ProductQtyWhereUniqueInputObjectSchema as ProductQtyWhereUniqueInputObjectSchema } from './objects/ProductQtyWhereUniqueInput.schema';

export const ProductQtyDeleteOneSchema: z.ZodType<Prisma.ProductQtyDeleteArgs> = z.object({ select: ProductQtySelectObjectSchema.optional(), include: ProductQtyIncludeObjectSchema.optional(), where: ProductQtyWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProductQtyDeleteArgs>;

export const ProductQtyDeleteOneZodSchema = z.object({ select: ProductQtySelectObjectSchema.optional(), include: ProductQtyIncludeObjectSchema.optional(), where: ProductQtyWhereUniqueInputObjectSchema }).strict();