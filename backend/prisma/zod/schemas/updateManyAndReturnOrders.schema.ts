import type { Prisma } from '../../../generated/prisma';
import * as z from 'zod';
import { OrdersSelectObjectSchema as OrdersSelectObjectSchema } from './objects/OrdersSelect.schema';
import { OrdersUpdateManyMutationInputObjectSchema as OrdersUpdateManyMutationInputObjectSchema } from './objects/OrdersUpdateManyMutationInput.schema';
import { OrdersWhereInputObjectSchema as OrdersWhereInputObjectSchema } from './objects/OrdersWhereInput.schema';

export const OrdersUpdateManyAndReturnSchema: z.ZodType<Prisma.OrdersUpdateManyAndReturnArgs> = z.object({ select: OrdersSelectObjectSchema.optional(), data: OrdersUpdateManyMutationInputObjectSchema, where: OrdersWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.OrdersUpdateManyAndReturnArgs>;

export const OrdersUpdateManyAndReturnZodSchema = z.object({ select: OrdersSelectObjectSchema.optional(), data: OrdersUpdateManyMutationInputObjectSchema, where: OrdersWhereInputObjectSchema.optional() }).strict();