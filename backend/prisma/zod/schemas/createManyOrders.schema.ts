import type { Prisma } from '../../../generated/prisma';
import * as z from 'zod';
import { OrdersCreateManyInputObjectSchema as OrdersCreateManyInputObjectSchema } from './objects/OrdersCreateManyInput.schema';

export const OrdersCreateManySchema: z.ZodType<Prisma.OrdersCreateManyArgs> = z.object({ data: z.union([ OrdersCreateManyInputObjectSchema, z.array(OrdersCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.OrdersCreateManyArgs>;

export const OrdersCreateManyZodSchema = z.object({ data: z.union([ OrdersCreateManyInputObjectSchema, z.array(OrdersCreateManyInputObjectSchema) ]),  }).strict();