import type { Prisma } from '../../../generated/prisma';
import * as z from 'zod';
import { OrdersSelectObjectSchema as OrdersSelectObjectSchema } from './objects/OrdersSelect.schema';
import { OrdersIncludeObjectSchema as OrdersIncludeObjectSchema } from './objects/OrdersInclude.schema';
import { OrdersWhereUniqueInputObjectSchema as OrdersWhereUniqueInputObjectSchema } from './objects/OrdersWhereUniqueInput.schema';
import { OrdersCreateInputObjectSchema as OrdersCreateInputObjectSchema } from './objects/OrdersCreateInput.schema';
import { OrdersUncheckedCreateInputObjectSchema as OrdersUncheckedCreateInputObjectSchema } from './objects/OrdersUncheckedCreateInput.schema';
import { OrdersUpdateInputObjectSchema as OrdersUpdateInputObjectSchema } from './objects/OrdersUpdateInput.schema';
import { OrdersUncheckedUpdateInputObjectSchema as OrdersUncheckedUpdateInputObjectSchema } from './objects/OrdersUncheckedUpdateInput.schema';

export const OrdersUpsertOneSchema: z.ZodType<Prisma.OrdersUpsertArgs> = z.object({ select: OrdersSelectObjectSchema.optional(), include: OrdersIncludeObjectSchema.optional(), where: OrdersWhereUniqueInputObjectSchema, create: z.union([ OrdersCreateInputObjectSchema, OrdersUncheckedCreateInputObjectSchema ]), update: z.union([ OrdersUpdateInputObjectSchema, OrdersUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.OrdersUpsertArgs>;

export const OrdersUpsertOneZodSchema = z.object({ select: OrdersSelectObjectSchema.optional(), include: OrdersIncludeObjectSchema.optional(), where: OrdersWhereUniqueInputObjectSchema, create: z.union([ OrdersCreateInputObjectSchema, OrdersUncheckedCreateInputObjectSchema ]), update: z.union([ OrdersUpdateInputObjectSchema, OrdersUncheckedUpdateInputObjectSchema ]) }).strict();