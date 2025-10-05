import type { Prisma } from '../../../generated/prisma';
import * as z from 'zod';
import { ProductQtySelectObjectSchema as ProductQtySelectObjectSchema } from './objects/ProductQtySelect.schema';
import { ProductQtyUpdateManyMutationInputObjectSchema as ProductQtyUpdateManyMutationInputObjectSchema } from './objects/ProductQtyUpdateManyMutationInput.schema';
import { ProductQtyWhereInputObjectSchema as ProductQtyWhereInputObjectSchema } from './objects/ProductQtyWhereInput.schema';

export const ProductQtyUpdateManyAndReturnSchema: z.ZodType<Prisma.ProductQtyUpdateManyAndReturnArgs> = z.object({ select: ProductQtySelectObjectSchema.optional(), data: ProductQtyUpdateManyMutationInputObjectSchema, where: ProductQtyWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProductQtyUpdateManyAndReturnArgs>;

export const ProductQtyUpdateManyAndReturnZodSchema = z.object({ select: ProductQtySelectObjectSchema.optional(), data: ProductQtyUpdateManyMutationInputObjectSchema, where: ProductQtyWhereInputObjectSchema.optional() }).strict();