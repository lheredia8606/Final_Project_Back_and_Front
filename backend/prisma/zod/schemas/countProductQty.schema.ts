import type { Prisma } from '../../../generated/prisma';
import * as z from 'zod';
import { ProductQtyOrderByWithRelationInputObjectSchema as ProductQtyOrderByWithRelationInputObjectSchema } from './objects/ProductQtyOrderByWithRelationInput.schema';
import { ProductQtyWhereInputObjectSchema as ProductQtyWhereInputObjectSchema } from './objects/ProductQtyWhereInput.schema';
import { ProductQtyWhereUniqueInputObjectSchema as ProductQtyWhereUniqueInputObjectSchema } from './objects/ProductQtyWhereUniqueInput.schema';
import { ProductQtyCountAggregateInputObjectSchema as ProductQtyCountAggregateInputObjectSchema } from './objects/ProductQtyCountAggregateInput.schema';

export const ProductQtyCountSchema: z.ZodType<Prisma.ProductQtyCountArgs> = z.object({ orderBy: z.union([ProductQtyOrderByWithRelationInputObjectSchema, ProductQtyOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductQtyWhereInputObjectSchema.optional(), cursor: ProductQtyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ProductQtyCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ProductQtyCountArgs>;

export const ProductQtyCountZodSchema = z.object({ orderBy: z.union([ProductQtyOrderByWithRelationInputObjectSchema, ProductQtyOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductQtyWhereInputObjectSchema.optional(), cursor: ProductQtyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ProductQtyCountAggregateInputObjectSchema ]).optional() }).strict();