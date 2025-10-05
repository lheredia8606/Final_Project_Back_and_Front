import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { UserCreateWithoutClientOrdersInputObjectSchema as UserCreateWithoutClientOrdersInputObjectSchema } from './UserCreateWithoutClientOrdersInput.schema';
import { UserUncheckedCreateWithoutClientOrdersInputObjectSchema as UserUncheckedCreateWithoutClientOrdersInputObjectSchema } from './UserUncheckedCreateWithoutClientOrdersInput.schema';
import { UserCreateOrConnectWithoutClientOrdersInputObjectSchema as UserCreateOrConnectWithoutClientOrdersInputObjectSchema } from './UserCreateOrConnectWithoutClientOrdersInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutClientOrdersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutClientOrdersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutClientOrdersInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutClientOrdersInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutClientOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutClientOrdersInput>;
export const UserCreateNestedOneWithoutClientOrdersInputObjectZodSchema = makeSchema();
