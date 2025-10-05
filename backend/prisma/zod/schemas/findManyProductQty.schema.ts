import type { Prisma } from '../../../generated/prisma';
import * as z from 'zod';
import { ProductQtyIncludeObjectSchema as ProductQtyIncludeObjectSchema } from './objects/ProductQtyInclude.schema';
import { ProductQtyOrderByWithRelationInputObjectSchema as ProductQtyOrderByWithRelationInputObjectSchema } from './objects/ProductQtyOrderByWithRelationInput.schema';
import { ProductQtyWhereInputObjectSchema as ProductQtyWhereInputObjectSchema } from './objects/ProductQtyWhereInput.schema';
import { ProductQtyWhereUniqueInputObjectSchema as ProductQtyWhereUniqueInputObjectSchema } from './objects/ProductQtyWhereUniqueInput.schema';
import { ProductQtyScalarFieldEnumSchema } from './enums/ProductQtyScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProductQtyFindManySelectSchema: z.ZodType<Prisma.ProductQtySelect> = z.object({
    id: z.boolean().optional(),
    orderId: z.boolean().optional(),
    productId: z.boolean().optional(),
    qty: z.boolean().optional(),
    order: z.boolean().optional(),
    product: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ProductQtySelect>;

export const ProductQtyFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    orderId: z.boolean().optional(),
    productId: z.boolean().optional(),
    qty: z.boolean().optional(),
    order: z.boolean().optional(),
    product: z.boolean().optional()
  }).strict();

export const ProductQtyFindManySchema: z.ZodType<Prisma.ProductQtyFindManyArgs> = z.object({ select: ProductQtyFindManySelectSchema.optional(), include: z.lazy(() => ProductQtyIncludeObjectSchema.optional()), orderBy: z.union([ProductQtyOrderByWithRelationInputObjectSchema, ProductQtyOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductQtyWhereInputObjectSchema.optional(), cursor: ProductQtyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProductQtyScalarFieldEnumSchema, ProductQtyScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ProductQtyFindManyArgs>;

export const ProductQtyFindManyZodSchema = z.object({ select: ProductQtyFindManySelectSchema.optional(), include: z.lazy(() => ProductQtyIncludeObjectSchema.optional()), orderBy: z.union([ProductQtyOrderByWithRelationInputObjectSchema, ProductQtyOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductQtyWhereInputObjectSchema.optional(), cursor: ProductQtyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProductQtyScalarFieldEnumSchema, ProductQtyScalarFieldEnumSchema.array()]).optional() }).strict();