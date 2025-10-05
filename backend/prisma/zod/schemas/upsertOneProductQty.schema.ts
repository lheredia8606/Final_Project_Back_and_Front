import type { Prisma } from '../../../generated/prisma';
import * as z from 'zod';
import { ProductQtySelectObjectSchema as ProductQtySelectObjectSchema } from './objects/ProductQtySelect.schema';
import { ProductQtyIncludeObjectSchema as ProductQtyIncludeObjectSchema } from './objects/ProductQtyInclude.schema';
import { ProductQtyWhereUniqueInputObjectSchema as ProductQtyWhereUniqueInputObjectSchema } from './objects/ProductQtyWhereUniqueInput.schema';
import { ProductQtyCreateInputObjectSchema as ProductQtyCreateInputObjectSchema } from './objects/ProductQtyCreateInput.schema';
import { ProductQtyUncheckedCreateInputObjectSchema as ProductQtyUncheckedCreateInputObjectSchema } from './objects/ProductQtyUncheckedCreateInput.schema';
import { ProductQtyUpdateInputObjectSchema as ProductQtyUpdateInputObjectSchema } from './objects/ProductQtyUpdateInput.schema';
import { ProductQtyUncheckedUpdateInputObjectSchema as ProductQtyUncheckedUpdateInputObjectSchema } from './objects/ProductQtyUncheckedUpdateInput.schema';

export const ProductQtyUpsertOneSchema: z.ZodType<Prisma.ProductQtyUpsertArgs> = z.object({ select: ProductQtySelectObjectSchema.optional(), include: ProductQtyIncludeObjectSchema.optional(), where: ProductQtyWhereUniqueInputObjectSchema, create: z.union([ ProductQtyCreateInputObjectSchema, ProductQtyUncheckedCreateInputObjectSchema ]), update: z.union([ ProductQtyUpdateInputObjectSchema, ProductQtyUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ProductQtyUpsertArgs>;

export const ProductQtyUpsertOneZodSchema = z.object({ select: ProductQtySelectObjectSchema.optional(), include: ProductQtyIncludeObjectSchema.optional(), where: ProductQtyWhereUniqueInputObjectSchema, create: z.union([ ProductQtyCreateInputObjectSchema, ProductQtyUncheckedCreateInputObjectSchema ]), update: z.union([ ProductQtyUpdateInputObjectSchema, ProductQtyUncheckedUpdateInputObjectSchema ]) }).strict();