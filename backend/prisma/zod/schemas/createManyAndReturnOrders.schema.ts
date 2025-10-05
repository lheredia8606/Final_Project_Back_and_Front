import type { Prisma } from '../../../generated/prisma';
import * as z from 'zod';
import { OrdersSelectObjectSchema as OrdersSelectObjectSchema } from './objects/OrdersSelect.schema';
import { OrdersCreateManyInputObjectSchema as OrdersCreateManyInputObjectSchema } from './objects/OrdersCreateManyInput.schema';

export const OrdersCreateManyAndReturnSchema: z.ZodType<Prisma.OrdersCreateManyAndReturnArgs> = z.object({ select: OrdersSelectObjectSchema.optional(), data: z.union([ OrdersCreateManyInputObjectSchema, z.array(OrdersCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.OrdersCreateManyAndReturnArgs>;

export const OrdersCreateManyAndReturnZodSchema = z.object({ select: OrdersSelectObjectSchema.optional(), data: z.union([ OrdersCreateManyInputObjectSchema, z.array(OrdersCreateManyInputObjectSchema) ]),  }).strict();