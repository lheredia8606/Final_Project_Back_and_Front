import type { Prisma } from '../../../generated/prisma';
import * as z from 'zod';
import { ProductsOrderByWithRelationInputObjectSchema as ProductsOrderByWithRelationInputObjectSchema } from './objects/ProductsOrderByWithRelationInput.schema';
import { ProductsWhereInputObjectSchema as ProductsWhereInputObjectSchema } from './objects/ProductsWhereInput.schema';
import { ProductsWhereUniqueInputObjectSchema as ProductsWhereUniqueInputObjectSchema } from './objects/ProductsWhereUniqueInput.schema';
import { ProductsCountAggregateInputObjectSchema as ProductsCountAggregateInputObjectSchema } from './objects/ProductsCountAggregateInput.schema';

export const ProductsCountSchema: z.ZodType<Prisma.ProductsCountArgs> = z.object({ orderBy: z.union([ProductsOrderByWithRelationInputObjectSchema, ProductsOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductsWhereInputObjectSchema.optional(), cursor: ProductsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ProductsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ProductsCountArgs>;

export const ProductsCountZodSchema = z.object({ orderBy: z.union([ProductsOrderByWithRelationInputObjectSchema, ProductsOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductsWhereInputObjectSchema.optional(), cursor: ProductsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ProductsCountAggregateInputObjectSchema ]).optional() }).strict();