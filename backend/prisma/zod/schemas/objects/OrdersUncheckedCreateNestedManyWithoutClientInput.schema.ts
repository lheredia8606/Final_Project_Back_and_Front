import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { OrdersCreateWithoutClientInputObjectSchema as OrdersCreateWithoutClientInputObjectSchema } from './OrdersCreateWithoutClientInput.schema';
import { OrdersUncheckedCreateWithoutClientInputObjectSchema as OrdersUncheckedCreateWithoutClientInputObjectSchema } from './OrdersUncheckedCreateWithoutClientInput.schema';
import { OrdersCreateOrConnectWithoutClientInputObjectSchema as OrdersCreateOrConnectWithoutClientInputObjectSchema } from './OrdersCreateOrConnectWithoutClientInput.schema';
import { OrdersCreateManyClientInputEnvelopeObjectSchema as OrdersCreateManyClientInputEnvelopeObjectSchema } from './OrdersCreateManyClientInputEnvelope.schema';
import { OrdersWhereUniqueInputObjectSchema as OrdersWhereUniqueInputObjectSchema } from './OrdersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrdersCreateWithoutClientInputObjectSchema), z.lazy(() => OrdersCreateWithoutClientInputObjectSchema).array(), z.lazy(() => OrdersUncheckedCreateWithoutClientInputObjectSchema), z.lazy(() => OrdersUncheckedCreateWithoutClientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrdersCreateOrConnectWithoutClientInputObjectSchema), z.lazy(() => OrdersCreateOrConnectWithoutClientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => OrdersCreateManyClientInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => OrdersWhereUniqueInputObjectSchema), z.lazy(() => OrdersWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const OrdersUncheckedCreateNestedManyWithoutClientInputObjectSchema: z.ZodType<Prisma.OrdersUncheckedCreateNestedManyWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.OrdersUncheckedCreateNestedManyWithoutClientInput>;
export const OrdersUncheckedCreateNestedManyWithoutClientInputObjectZodSchema = makeSchema();
