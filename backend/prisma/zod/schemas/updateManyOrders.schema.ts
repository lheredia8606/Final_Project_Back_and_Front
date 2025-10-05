import type { Prisma } from '../../../generated/prisma';
import * as z from 'zod';
import { OrdersUpdateManyMutationInputObjectSchema as OrdersUpdateManyMutationInputObjectSchema } from './objects/OrdersUpdateManyMutationInput.schema';
import { OrdersWhereInputObjectSchema as OrdersWhereInputObjectSchema } from './objects/OrdersWhereInput.schema';

export const OrdersUpdateManySchema: z.ZodType<Prisma.OrdersUpdateManyArgs> = z.object({ data: OrdersUpdateManyMutationInputObjectSchema, where: OrdersWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.OrdersUpdateManyArgs>;

export const OrdersUpdateManyZodSchema = z.object({ data: OrdersUpdateManyMutationInputObjectSchema, where: OrdersWhereInputObjectSchema.optional() }).strict();