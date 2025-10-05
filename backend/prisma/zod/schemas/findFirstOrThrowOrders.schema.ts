import type { Prisma } from '../../../generated/prisma';
import * as z from 'zod';
import { OrdersIncludeObjectSchema as OrdersIncludeObjectSchema } from './objects/OrdersInclude.schema';
import { OrdersOrderByWithRelationInputObjectSchema as OrdersOrderByWithRelationInputObjectSchema } from './objects/OrdersOrderByWithRelationInput.schema';
import { OrdersWhereInputObjectSchema as OrdersWhereInputObjectSchema } from './objects/OrdersWhereInput.schema';
import { OrdersWhereUniqueInputObjectSchema as OrdersWhereUniqueInputObjectSchema } from './objects/OrdersWhereUniqueInput.schema';
import { OrdersScalarFieldEnumSchema } from './enums/OrdersScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const OrdersFindFirstOrThrowSelectSchema: z.ZodType<Prisma.OrdersSelect> = z.object({
    id: z.boolean().optional(),
    clientId: z.boolean().optional(),
    client: z.boolean().optional(),
    workerId: z.boolean().optional(),
    worker: z.boolean().optional(),
    deadLine: z.boolean().optional(),
    status: z.boolean().optional(),
    productQty: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.OrdersSelect>;

export const OrdersFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    clientId: z.boolean().optional(),
    client: z.boolean().optional(),
    workerId: z.boolean().optional(),
    worker: z.boolean().optional(),
    deadLine: z.boolean().optional(),
    status: z.boolean().optional(),
    productQty: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const OrdersFindFirstOrThrowSchema: z.ZodType<Prisma.OrdersFindFirstOrThrowArgs> = z.object({ select: OrdersFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => OrdersIncludeObjectSchema.optional()), orderBy: z.union([OrdersOrderByWithRelationInputObjectSchema, OrdersOrderByWithRelationInputObjectSchema.array()]).optional(), where: OrdersWhereInputObjectSchema.optional(), cursor: OrdersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([OrdersScalarFieldEnumSchema, OrdersScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.OrdersFindFirstOrThrowArgs>;

export const OrdersFindFirstOrThrowZodSchema = z.object({ select: OrdersFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => OrdersIncludeObjectSchema.optional()), orderBy: z.union([OrdersOrderByWithRelationInputObjectSchema, OrdersOrderByWithRelationInputObjectSchema.array()]).optional(), where: OrdersWhereInputObjectSchema.optional(), cursor: OrdersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([OrdersScalarFieldEnumSchema, OrdersScalarFieldEnumSchema.array()]).optional() }).strict();