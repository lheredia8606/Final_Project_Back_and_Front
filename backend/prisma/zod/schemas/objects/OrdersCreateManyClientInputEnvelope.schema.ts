import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { OrdersCreateManyClientInputObjectSchema as OrdersCreateManyClientInputObjectSchema } from './OrdersCreateManyClientInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => OrdersCreateManyClientInputObjectSchema), z.lazy(() => OrdersCreateManyClientInputObjectSchema).array()])
}).strict();
export const OrdersCreateManyClientInputEnvelopeObjectSchema: z.ZodType<Prisma.OrdersCreateManyClientInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.OrdersCreateManyClientInputEnvelope>;
export const OrdersCreateManyClientInputEnvelopeObjectZodSchema = makeSchema();
