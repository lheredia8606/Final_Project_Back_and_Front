import type { Prisma } from '../../../generated/prisma';
import * as z from 'zod';
import { OrdersSelectObjectSchema as OrdersSelectObjectSchema } from './objects/OrdersSelect.schema';
import { OrdersIncludeObjectSchema as OrdersIncludeObjectSchema } from './objects/OrdersInclude.schema';
import { OrdersCreateInputObjectSchema as OrdersCreateInputObjectSchema } from './objects/OrdersCreateInput.schema';
import { OrdersUncheckedCreateInputObjectSchema as OrdersUncheckedCreateInputObjectSchema } from './objects/OrdersUncheckedCreateInput.schema';

export const OrdersCreateOneSchema: z.ZodType<Prisma.OrdersCreateArgs> = z.object({ select: OrdersSelectObjectSchema.optional(), include: OrdersIncludeObjectSchema.optional(), data: z.union([OrdersCreateInputObjectSchema, OrdersUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.OrdersCreateArgs>;

export const OrdersCreateOneZodSchema = z.object({ select: OrdersSelectObjectSchema.optional(), include: OrdersIncludeObjectSchema.optional(), data: z.union([OrdersCreateInputObjectSchema, OrdersUncheckedCreateInputObjectSchema]) }).strict();