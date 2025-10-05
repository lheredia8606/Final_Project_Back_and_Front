import type { Prisma } from '../../../generated/prisma';
import * as z from 'zod';
import { OrdersSelectObjectSchema as OrdersSelectObjectSchema } from './objects/OrdersSelect.schema';
import { OrdersIncludeObjectSchema as OrdersIncludeObjectSchema } from './objects/OrdersInclude.schema';
import { OrdersWhereUniqueInputObjectSchema as OrdersWhereUniqueInputObjectSchema } from './objects/OrdersWhereUniqueInput.schema';

export const OrdersFindUniqueSchema: z.ZodType<Prisma.OrdersFindUniqueArgs> = z.object({ select: OrdersSelectObjectSchema.optional(), include: OrdersIncludeObjectSchema.optional(), where: OrdersWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.OrdersFindUniqueArgs>;

export const OrdersFindUniqueZodSchema = z.object({ select: OrdersSelectObjectSchema.optional(), include: OrdersIncludeObjectSchema.optional(), where: OrdersWhereUniqueInputObjectSchema }).strict();