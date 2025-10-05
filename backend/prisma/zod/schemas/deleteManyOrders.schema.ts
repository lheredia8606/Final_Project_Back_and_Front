import type { Prisma } from '../../../generated/prisma';
import * as z from 'zod';
import { OrdersWhereInputObjectSchema as OrdersWhereInputObjectSchema } from './objects/OrdersWhereInput.schema';

export const OrdersDeleteManySchema: z.ZodType<Prisma.OrdersDeleteManyArgs> = z.object({ where: OrdersWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.OrdersDeleteManyArgs>;

export const OrdersDeleteManyZodSchema = z.object({ where: OrdersWhereInputObjectSchema.optional() }).strict();