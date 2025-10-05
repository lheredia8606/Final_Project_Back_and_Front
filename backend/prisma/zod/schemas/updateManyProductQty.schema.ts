import type { Prisma } from '../../../generated/prisma';
import * as z from 'zod';
import { ProductQtyUpdateManyMutationInputObjectSchema as ProductQtyUpdateManyMutationInputObjectSchema } from './objects/ProductQtyUpdateManyMutationInput.schema';
import { ProductQtyWhereInputObjectSchema as ProductQtyWhereInputObjectSchema } from './objects/ProductQtyWhereInput.schema';

export const ProductQtyUpdateManySchema: z.ZodType<Prisma.ProductQtyUpdateManyArgs> = z.object({ data: ProductQtyUpdateManyMutationInputObjectSchema, where: ProductQtyWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProductQtyUpdateManyArgs>;

export const ProductQtyUpdateManyZodSchema = z.object({ data: ProductQtyUpdateManyMutationInputObjectSchema, where: ProductQtyWhereInputObjectSchema.optional() }).strict();