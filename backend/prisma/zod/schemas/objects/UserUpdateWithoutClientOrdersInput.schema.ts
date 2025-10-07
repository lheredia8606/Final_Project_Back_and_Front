import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { RoleSchema } from '../enums/Role.schema';
import { EnumRoleFieldUpdateOperationsInputObjectSchema as EnumRoleFieldUpdateOperationsInputObjectSchema } from './EnumRoleFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { OrdersUpdateManyWithoutWorkerNestedInputObjectSchema as OrdersUpdateManyWithoutWorkerNestedInputObjectSchema } from './OrdersUpdateManyWithoutWorkerNestedInput.schema'

const makeSchema = () => z.object({
  firstName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([RoleSchema, z.lazy(() => EnumRoleFieldUpdateOperationsInputObjectSchema)]).optional(),
  phone: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  isActive: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  workerOrders: z.lazy(() => OrdersUpdateManyWithoutWorkerNestedInputObjectSchema).optional()
}).strict();
export const UserUpdateWithoutClientOrdersInputObjectSchema: z.ZodType<Prisma.UserUpdateWithoutClientOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateWithoutClientOrdersInput>;
export const UserUpdateWithoutClientOrdersInputObjectZodSchema = makeSchema();
