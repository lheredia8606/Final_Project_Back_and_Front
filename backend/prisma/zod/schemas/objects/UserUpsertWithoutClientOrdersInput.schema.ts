import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { UserUpdateWithoutClientOrdersInputObjectSchema as UserUpdateWithoutClientOrdersInputObjectSchema } from './UserUpdateWithoutClientOrdersInput.schema';
import { UserUncheckedUpdateWithoutClientOrdersInputObjectSchema as UserUncheckedUpdateWithoutClientOrdersInputObjectSchema } from './UserUncheckedUpdateWithoutClientOrdersInput.schema';
import { UserCreateWithoutClientOrdersInputObjectSchema as UserCreateWithoutClientOrdersInputObjectSchema } from './UserCreateWithoutClientOrdersInput.schema';
import { UserUncheckedCreateWithoutClientOrdersInputObjectSchema as UserUncheckedCreateWithoutClientOrdersInputObjectSchema } from './UserUncheckedCreateWithoutClientOrdersInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutClientOrdersInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutClientOrdersInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutClientOrdersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutClientOrdersInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutClientOrdersInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutClientOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutClientOrdersInput>;
export const UserUpsertWithoutClientOrdersInputObjectZodSchema = makeSchema();
