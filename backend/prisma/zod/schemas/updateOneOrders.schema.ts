import type { Prisma } from '../../../generated/prisma';
import * as z from 'zod';
import { OrdersSelectObjectSchema as OrdersSelectObjectSchema } from './objects/OrdersSelect.schema';
import { OrdersIncludeObjectSchema as OrdersIncludeObjectSchema } from './objects/OrdersInclude.schema';
import { OrdersUpdateInputObjectSchema as OrdersUpdateInputObjectSchema } from './objects/OrdersUpdateInput.schema';
import { OrdersUncheckedUpdateInputObjectSchema as OrdersUncheckedUpdateInputObjectSchema } from './objects/OrdersUncheckedUpdateInput.schema';
import { OrdersWhereUniqueInputObjectSchema as OrdersWhereUniqueInputObjectSchema } from './objects/OrdersWhereUniqueInput.schema';

export const OrdersUpdateOneSchema: z.ZodType<Prisma.OrdersUpdateArgs> = z.object({ select: OrdersSelectObjectSchema.optional(), include: OrdersIncludeObjectSchema.optional(), data: z.union([OrdersUpdateInputObjectSchema, OrdersUncheckedUpdateInputObjectSchema]), where: OrdersWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.OrdersUpdateArgs>;

export const OrdersUpdateOneZodSchema = z.object({ select: OrdersSelectObjectSchema.optional(), include: OrdersIncludeObjectSchema.optional(), data: z.union([OrdersUpdateInputObjectSchema, OrdersUncheckedUpdateInputObjectSchema]), where: OrdersWhereUniqueInputObjectSchema }).strict();