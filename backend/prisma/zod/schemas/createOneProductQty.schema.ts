import type { Prisma } from '../../../generated/prisma';
import * as z from 'zod';
import { ProductQtySelectObjectSchema as ProductQtySelectObjectSchema } from './objects/ProductQtySelect.schema';
import { ProductQtyIncludeObjectSchema as ProductQtyIncludeObjectSchema } from './objects/ProductQtyInclude.schema';
import { ProductQtyCreateInputObjectSchema as ProductQtyCreateInputObjectSchema } from './objects/ProductQtyCreateInput.schema';
import { ProductQtyUncheckedCreateInputObjectSchema as ProductQtyUncheckedCreateInputObjectSchema } from './objects/ProductQtyUncheckedCreateInput.schema';

export const ProductQtyCreateOneSchema: z.ZodType<Prisma.ProductQtyCreateArgs> = z.object({ select: ProductQtySelectObjectSchema.optional(), include: ProductQtyIncludeObjectSchema.optional(), data: z.union([ProductQtyCreateInputObjectSchema, ProductQtyUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ProductQtyCreateArgs>;

export const ProductQtyCreateOneZodSchema = z.object({ select: ProductQtySelectObjectSchema.optional(), include: ProductQtyIncludeObjectSchema.optional(), data: z.union([ProductQtyCreateInputObjectSchema, ProductQtyUncheckedCreateInputObjectSchema]) }).strict();