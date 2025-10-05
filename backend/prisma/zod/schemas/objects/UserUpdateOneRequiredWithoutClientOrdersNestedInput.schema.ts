import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { UserCreateWithoutClientOrdersInputObjectSchema as UserCreateWithoutClientOrdersInputObjectSchema } from './UserCreateWithoutClientOrdersInput.schema';
import { UserUncheckedCreateWithoutClientOrdersInputObjectSchema as UserUncheckedCreateWithoutClientOrdersInputObjectSchema } from './UserUncheckedCreateWithoutClientOrdersInput.schema';
import { UserCreateOrConnectWithoutClientOrdersInputObjectSchema as UserCreateOrConnectWithoutClientOrdersInputObjectSchema } from './UserCreateOrConnectWithoutClientOrdersInput.schema';
import { UserUpsertWithoutClientOrdersInputObjectSchema as UserUpsertWithoutClientOrdersInputObjectSchema } from './UserUpsertWithoutClientOrdersInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutClientOrdersInputObjectSchema as UserUpdateToOneWithWhereWithoutClientOrdersInputObjectSchema } from './UserUpdateToOneWithWhereWithoutClientOrdersInput.schema';
import { UserUpdateWithoutClientOrdersInputObjectSchema as UserUpdateWithoutClientOrdersInputObjectSchema } from './UserUpdateWithoutClientOrdersInput.schema';
import { UserUncheckedUpdateWithoutClientOrdersInputObjectSchema as UserUncheckedUpdateWithoutClientOrdersInputObjectSchema } from './UserUncheckedUpdateWithoutClientOrdersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutClientOrdersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutClientOrdersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutClientOrdersInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutClientOrdersInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutClientOrdersInputObjectSchema), z.lazy(() => UserUpdateWithoutClientOrdersInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutClientOrdersInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutClientOrdersNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutClientOrdersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutClientOrdersNestedInput>;
export const UserUpdateOneRequiredWithoutClientOrdersNestedInputObjectZodSchema = makeSchema();
