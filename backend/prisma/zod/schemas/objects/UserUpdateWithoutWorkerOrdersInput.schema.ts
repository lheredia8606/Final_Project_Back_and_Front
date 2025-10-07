import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { RoleSchema } from '../enums/Role.schema';
import { EnumRoleFieldUpdateOperationsInputObjectSchema as EnumRoleFieldUpdateOperationsInputObjectSchema } from './EnumRoleFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { OrdersUpdateManyWithoutClientNestedInputObjectSchema as OrdersUpdateManyWithoutClientNestedInputObjectSchema } from './OrdersUpdateManyWithoutClientNestedInput.schema'

const makeSchema = () => z.object({
  firstName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([RoleSchema, z.lazy(() => EnumRoleFieldUpdateOperationsInputObjectSchema)]).optional(),
  phone: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  isActive: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  clientOrders: z.lazy(() => OrdersUpdateManyWithoutClientNestedInputObjectSchema).optional()
}).strict();
export const UserUpdateWithoutWorkerOrdersInputObjectSchema: z.ZodType<Prisma.UserUpdateWithoutWorkerOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateWithoutWorkerOrdersInput>;
export const UserUpdateWithoutWorkerOrdersInputObjectZodSchema = makeSchema();
