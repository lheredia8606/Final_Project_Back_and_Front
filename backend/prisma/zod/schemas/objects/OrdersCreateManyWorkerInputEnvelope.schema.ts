import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { OrdersCreateManyWorkerInputObjectSchema as OrdersCreateManyWorkerInputObjectSchema } from './OrdersCreateManyWorkerInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => OrdersCreateManyWorkerInputObjectSchema), z.lazy(() => OrdersCreateManyWorkerInputObjectSchema).array()])
}).strict();
export const OrdersCreateManyWorkerInputEnvelopeObjectSchema: z.ZodType<Prisma.OrdersCreateManyWorkerInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.OrdersCreateManyWorkerInputEnvelope>;
export const OrdersCreateManyWorkerInputEnvelopeObjectZodSchema = makeSchema();
