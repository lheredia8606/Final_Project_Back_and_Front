import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { RoleSchema } from '../enums/Role.schema';
import { OrdersCreateNestedManyWithoutWorkerInputObjectSchema as OrdersCreateNestedManyWithoutWorkerInputObjectSchema } from './OrdersCreateNestedManyWithoutWorkerInput.schema'

const makeSchema = () => z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  password: z.string(),
  role: RoleSchema.optional(),
  phone: z.string(),
  isActive: z.boolean(),
  workerOrders: z.lazy(() => OrdersCreateNestedManyWithoutWorkerInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutClientOrdersInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutClientOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutClientOrdersInput>;
export const UserCreateWithoutClientOrdersInputObjectZodSchema = makeSchema();
