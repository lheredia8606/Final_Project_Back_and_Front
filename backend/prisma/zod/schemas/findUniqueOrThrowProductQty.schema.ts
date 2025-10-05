import type { Prisma } from '../../../generated/prisma';
import * as z from 'zod';
import { ProductQtySelectObjectSchema as ProductQtySelectObjectSchema } from './objects/ProductQtySelect.schema';
import { ProductQtyIncludeObjectSchema as ProductQtyIncludeObjectSchema } from './objects/ProductQtyInclude.schema';
import { ProductQtyWhereUniqueInputObjectSchema as ProductQtyWhereUniqueInputObjectSchema } from './objects/ProductQtyWhereUniqueInput.schema';

export const ProductQtyFindUniqueOrThrowSchema: z.ZodType<Prisma.ProductQtyFindUniqueOrThrowArgs> = z.object({ select: ProductQtySelectObjectSchema.optional(), include: ProductQtyIncludeObjectSchema.optional(), where: ProductQtyWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProductQtyFindUniqueOrThrowArgs>;

export const ProductQtyFindUniqueOrThrowZodSchema = z.object({ select: ProductQtySelectObjectSchema.optional(), include: ProductQtyIncludeObjectSchema.optional(), where: ProductQtyWhereUniqueInputObjectSchema }).strict();