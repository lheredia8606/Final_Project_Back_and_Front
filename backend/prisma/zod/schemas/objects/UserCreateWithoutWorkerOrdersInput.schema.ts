import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { RoleSchema } from '../enums/Role.schema';
import { OrdersCreateNestedManyWithoutClientInputObjectSchema as OrdersCreateNestedManyWithoutClientInputObjectSchema } from './OrdersCreateNestedManyWithoutClientInput.schema'

const makeSchema = () => z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  password: z.string(),
  role: RoleSchema.optional(),
  phone: z.string(),
  isActive: z.boolean(),
  clientOrders: z.lazy(() => OrdersCreateNestedManyWithoutClientInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutWorkerOrdersInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutWorkerOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutWorkerOrdersInput>;
export const UserCreateWithoutWorkerOrdersInputObjectZodSchema = makeSchema();
