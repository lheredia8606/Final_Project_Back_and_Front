import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { RoleSchema } from '../enums/Role.schema';
import { OrdersUncheckedCreateNestedManyWithoutClientInputObjectSchema as OrdersUncheckedCreateNestedManyWithoutClientInputObjectSchema } from './OrdersUncheckedCreateNestedManyWithoutClientInput.schema';
import { OrdersUncheckedCreateNestedManyWithoutWorkerInputObjectSchema as OrdersUncheckedCreateNestedManyWithoutWorkerInputObjectSchema } from './OrdersUncheckedCreateNestedManyWithoutWorkerInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  password: z.string(),
  role: RoleSchema.optional(),
  phone: z.string(),
  isActive: z.boolean(),
  clientOrders: z.lazy(() => OrdersUncheckedCreateNestedManyWithoutClientInputObjectSchema),
  workerOrders: z.lazy(() => OrdersUncheckedCreateNestedManyWithoutWorkerInputObjectSchema)
}).strict();
export const UserUncheckedCreateInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateInput>;
export const UserUncheckedCreateInputObjectZodSchema = makeSchema();
