import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { RoleSchema } from '../enums/Role.schema';
import { OrdersUncheckedCreateNestedManyWithoutWorkerInputObjectSchema as OrdersUncheckedCreateNestedManyWithoutWorkerInputObjectSchema } from './OrdersUncheckedCreateNestedManyWithoutWorkerInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  role: RoleSchema.optional(),
  phone: z.string(),
  isActive: z.boolean(),
  workerOrders: z.lazy(() => OrdersUncheckedCreateNestedManyWithoutWorkerInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutClientOrdersInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutClientOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutClientOrdersInput>;
export const UserUncheckedCreateWithoutClientOrdersInputObjectZodSchema = makeSchema();
