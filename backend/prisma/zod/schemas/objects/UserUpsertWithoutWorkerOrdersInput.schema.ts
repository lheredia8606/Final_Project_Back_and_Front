import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { UserUpdateWithoutWorkerOrdersInputObjectSchema as UserUpdateWithoutWorkerOrdersInputObjectSchema } from './UserUpdateWithoutWorkerOrdersInput.schema';
import { UserUncheckedUpdateWithoutWorkerOrdersInputObjectSchema as UserUncheckedUpdateWithoutWorkerOrdersInputObjectSchema } from './UserUncheckedUpdateWithoutWorkerOrdersInput.schema';
import { UserCreateWithoutWorkerOrdersInputObjectSchema as UserCreateWithoutWorkerOrdersInputObjectSchema } from './UserCreateWithoutWorkerOrdersInput.schema';
import { UserUncheckedCreateWithoutWorkerOrdersInputObjectSchema as UserUncheckedCreateWithoutWorkerOrdersInputObjectSchema } from './UserUncheckedCreateWithoutWorkerOrdersInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutWorkerOrdersInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutWorkerOrdersInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutWorkerOrdersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutWorkerOrdersInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutWorkerOrdersInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutWorkerOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutWorkerOrdersInput>;
export const UserUpsertWithoutWorkerOrdersInputObjectZodSchema = makeSchema();
