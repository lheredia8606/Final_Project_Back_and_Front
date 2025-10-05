import type { Prisma } from '../../../generated/prisma';
import * as z from 'zod';
import { ProductQtySelectObjectSchema as ProductQtySelectObjectSchema } from './objects/ProductQtySelect.schema';
import { ProductQtyIncludeObjectSchema as ProductQtyIncludeObjectSchema } from './objects/ProductQtyInclude.schema';
import { ProductQtyWhereUniqueInputObjectSchema as ProductQtyWhereUniqueInputObjectSchema } from './objects/ProductQtyWhereUniqueInput.schema';

export const ProductQtyFindUniqueSchema: z.ZodType<Prisma.ProductQtyFindUniqueArgs> = z.object({ select: ProductQtySelectObjectSchema.optional(), include: ProductQtyIncludeObjectSchema.optional(), where: ProductQtyWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProductQtyFindUniqueArgs>;

export const ProductQtyFindUniqueZodSchema = z.object({ select: ProductQtySelectObjectSchema.optional(), include: ProductQtyIncludeObjectSchema.optional(), where: ProductQtyWhereUniqueInputObjectSchema }).strict();