import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { OrdersCreateWithoutProductQtyInputObjectSchema as OrdersCreateWithoutProductQtyInputObjectSchema } from './OrdersCreateWithoutProductQtyInput.schema';
import { OrdersUncheckedCreateWithoutProductQtyInputObjectSchema as OrdersUncheckedCreateWithoutProductQtyInputObjectSchema } from './OrdersUncheckedCreateWithoutProductQtyInput.schema';
import { OrdersCreateOrConnectWithoutProductQtyInputObjectSchema as OrdersCreateOrConnectWithoutProductQtyInputObjectSchema } from './OrdersCreateOrConnectWithoutProductQtyInput.schema';
import { OrdersUpsertWithoutProductQtyInputObjectSchema as OrdersUpsertWithoutProductQtyInputObjectSchema } from './OrdersUpsertWithoutProductQtyInput.schema';
import { OrdersWhereUniqueInputObjectSchema as OrdersWhereUniqueInputObjectSchema } from './OrdersWhereUniqueInput.schema';
import { OrdersUpdateToOneWithWhereWithoutProductQtyInputObjectSchema as OrdersUpdateToOneWithWhereWithoutProductQtyInputObjectSchema } from './OrdersUpdateToOneWithWhereWithoutProductQtyInput.schema';
import { OrdersUpdateWithoutProductQtyInputObjectSchema as OrdersUpdateWithoutProductQtyInputObjectSchema } from './OrdersUpdateWithoutProductQtyInput.schema';
import { OrdersUncheckedUpdateWithoutProductQtyInputObjectSchema as OrdersUncheckedUpdateWithoutProductQtyInputObjectSchema } from './OrdersUncheckedUpdateWithoutProductQtyInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrdersCreateWithoutProductQtyInputObjectSchema), z.lazy(() => OrdersUncheckedCreateWithoutProductQtyInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrdersCreateOrConnectWithoutProductQtyInputObjectSchema).optional(),
  upsert: z.lazy(() => OrdersUpsertWithoutProductQtyInputObjectSchema).optional(),
  connect: z.lazy(() => OrdersWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => OrdersUpdateToOneWithWhereWithoutProductQtyInputObjectSchema), z.lazy(() => OrdersUpdateWithoutProductQtyInputObjectSchema), z.lazy(() => OrdersUncheckedUpdateWithoutProductQtyInputObjectSchema)]).optional()
}).strict();
export const OrdersUpdateOneRequiredWithoutProductQtyNestedInputObjectSchema: z.ZodType<Prisma.OrdersUpdateOneRequiredWithoutProductQtyNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrdersUpdateOneRequiredWithoutProductQtyNestedInput>;
export const OrdersUpdateOneRequiredWithoutProductQtyNestedInputObjectZodSchema = makeSchema();
