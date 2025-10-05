import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { UserCreateWithoutWorkerOrdersInputObjectSchema as UserCreateWithoutWorkerOrdersInputObjectSchema } from './UserCreateWithoutWorkerOrdersInput.schema';
import { UserUncheckedCreateWithoutWorkerOrdersInputObjectSchema as UserUncheckedCreateWithoutWorkerOrdersInputObjectSchema } from './UserUncheckedCreateWithoutWorkerOrdersInput.schema';
import { UserCreateOrConnectWithoutWorkerOrdersInputObjectSchema as UserCreateOrConnectWithoutWorkerOrdersInputObjectSchema } from './UserCreateOrConnectWithoutWorkerOrdersInput.schema';
import { UserUpsertWithoutWorkerOrdersInputObjectSchema as UserUpsertWithoutWorkerOrdersInputObjectSchema } from './UserUpsertWithoutWorkerOrdersInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutWorkerOrdersInputObjectSchema as UserUpdateToOneWithWhereWithoutWorkerOrdersInputObjectSchema } from './UserUpdateToOneWithWhereWithoutWorkerOrdersInput.schema';
import { UserUpdateWithoutWorkerOrdersInputObjectSchema as UserUpdateWithoutWorkerOrdersInputObjectSchema } from './UserUpdateWithoutWorkerOrdersInput.schema';
import { UserUncheckedUpdateWithoutWorkerOrdersInputObjectSchema as UserUncheckedUpdateWithoutWorkerOrdersInputObjectSchema } from './UserUncheckedUpdateWithoutWorkerOrdersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutWorkerOrdersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutWorkerOrdersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutWorkerOrdersInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutWorkerOrdersInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutWorkerOrdersInputObjectSchema), z.lazy(() => UserUpdateWithoutWorkerOrdersInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutWorkerOrdersInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutWorkerOrdersNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutWorkerOrdersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneWithoutWorkerOrdersNestedInput>;
export const UserUpdateOneWithoutWorkerOrdersNestedInputObjectZodSchema = makeSchema();
