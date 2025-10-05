import type { Prisma } from '../../../generated/prisma';
import * as z from 'zod';
import { OrdersOrderByWithRelationInputObjectSchema as OrdersOrderByWithRelationInputObjectSchema } from './objects/OrdersOrderByWithRelationInput.schema';
import { OrdersWhereInputObjectSchema as OrdersWhereInputObjectSchema } from './objects/OrdersWhereInput.schema';
import { OrdersWhereUniqueInputObjectSchema as OrdersWhereUniqueInputObjectSchema } from './objects/OrdersWhereUniqueInput.schema';
import { OrdersCountAggregateInputObjectSchema as OrdersCountAggregateInputObjectSchema } from './objects/OrdersCountAggregateInput.schema';

export const OrdersCountSchema: z.ZodType<Prisma.OrdersCountArgs> = z.object({ orderBy: z.union([OrdersOrderByWithRelationInputObjectSchema, OrdersOrderByWithRelationInputObjectSchema.array()]).optional(), where: OrdersWhereInputObjectSchema.optional(), cursor: OrdersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), OrdersCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.OrdersCountArgs>;

export const OrdersCountZodSchema = z.object({ orderBy: z.union([OrdersOrderByWithRelationInputObjectSchema, OrdersOrderByWithRelationInputObjectSchema.array()]).optional(), where: OrdersWhereInputObjectSchema.optional(), cursor: OrdersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), OrdersCountAggregateInputObjectSchema ]).optional() }).strict();