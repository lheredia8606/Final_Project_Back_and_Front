import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { RoleSchema } from '../enums/Role.schema';
import { OrdersUncheckedCreateNestedManyWithoutClientInputObjectSchema as OrdersUncheckedCreateNestedManyWithoutClientInputObjectSchema } from './OrdersUncheckedCreateNestedManyWithoutClientInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  role: RoleSchema.optional(),
  phone: z.string(),
  isActive: z.boolean(),
  clientOrders: z.lazy(() => OrdersUncheckedCreateNestedManyWithoutClientInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutWorkerOrdersInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutWorkerOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutWorkerOrdersInput>;
export const UserUncheckedCreateWithoutWorkerOrdersInputObjectZodSchema = makeSchema();
