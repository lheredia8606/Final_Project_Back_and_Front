import type { Prisma } from '../../../generated/prisma';
import * as z from 'zod';
import { ProductQtySelectObjectSchema as ProductQtySelectObjectSchema } from './objects/ProductQtySelect.schema';
import { ProductQtyIncludeObjectSchema as ProductQtyIncludeObjectSchema } from './objects/ProductQtyInclude.schema';
import { ProductQtyUpdateInputObjectSchema as ProductQtyUpdateInputObjectSchema } from './objects/ProductQtyUpdateInput.schema';
import { ProductQtyUncheckedUpdateInputObjectSchema as ProductQtyUncheckedUpdateInputObjectSchema } from './objects/ProductQtyUncheckedUpdateInput.schema';
import { ProductQtyWhereUniqueInputObjectSchema as ProductQtyWhereUniqueInputObjectSchema } from './objects/ProductQtyWhereUniqueInput.schema';

export const ProductQtyUpdateOneSchema: z.ZodType<Prisma.ProductQtyUpdateArgs> = z.object({ select: ProductQtySelectObjectSchema.optional(), include: ProductQtyIncludeObjectSchema.optional(), data: z.union([ProductQtyUpdateInputObjectSchema, ProductQtyUncheckedUpdateInputObjectSchema]), where: ProductQtyWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProductQtyUpdateArgs>;

export const ProductQtyUpdateOneZodSchema = z.object({ select: ProductQtySelectObjectSchema.optional(), include: ProductQtyIncludeObjectSchema.optional(), data: z.union([ProductQtyUpdateInputObjectSchema, ProductQtyUncheckedUpdateInputObjectSchema]), where: ProductQtyWhereUniqueInputObjectSchema }).strict();