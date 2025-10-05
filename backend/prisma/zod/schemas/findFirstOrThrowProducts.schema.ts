import type { Prisma } from '../../../generated/prisma';
import * as z from 'zod';
import { ProductsIncludeObjectSchema as ProductsIncludeObjectSchema } from './objects/ProductsInclude.schema';
import { ProductsOrderByWithRelationInputObjectSchema as ProductsOrderByWithRelationInputObjectSchema } from './objects/ProductsOrderByWithRelationInput.schema';
import { ProductsWhereInputObjectSchema as ProductsWhereInputObjectSchema } from './objects/ProductsWhereInput.schema';
import { ProductsWhereUniqueInputObjectSchema as ProductsWhereUniqueInputObjectSchema } from './objects/ProductsWhereUniqueInput.schema';
import { ProductsScalarFieldEnumSchema } from './enums/ProductsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProductsFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ProductsSelect> = z.object({
    id: z.boolean().optional(),
    type: z.boolean().optional(),
    name: z.boolean().optional(),
    inStock: z.boolean().optional(),
    image: z.boolean().optional(),
    price: z.boolean().optional(),
    productQty: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ProductsSelect>;

export const ProductsFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    type: z.boolean().optional(),
    name: z.boolean().optional(),
    inStock: z.boolean().optional(),
    image: z.boolean().optional(),
    price: z.boolean().optional(),
    productQty: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ProductsFindFirstOrThrowSchema: z.ZodType<Prisma.ProductsFindFirstOrThrowArgs> = z.object({ select: ProductsFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ProductsIncludeObjectSchema.optional()), orderBy: z.union([ProductsOrderByWithRelationInputObjectSchema, ProductsOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductsWhereInputObjectSchema.optional(), cursor: ProductsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProductsScalarFieldEnumSchema, ProductsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ProductsFindFirstOrThrowArgs>;

export const ProductsFindFirstOrThrowZodSchema = z.object({ select: ProductsFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ProductsIncludeObjectSchema.optional()), orderBy: z.union([ProductsOrderByWithRelationInputObjectSchema, ProductsOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductsWhereInputObjectSchema.optional(), cursor: ProductsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProductsScalarFieldEnumSchema, ProductsScalarFieldEnumSchema.array()]).optional() }).strict();