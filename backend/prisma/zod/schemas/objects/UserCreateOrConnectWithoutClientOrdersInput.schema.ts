import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutClientOrdersInputObjectSchema as UserCreateWithoutClientOrdersInputObjectSchema } from './UserCreateWithoutClientOrdersInput.schema';
import { UserUncheckedCreateWithoutClientOrdersInputObjectSchema as UserUncheckedCreateWithoutClientOrdersInputObjectSchema } from './UserUncheckedCreateWithoutClientOrdersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutClientOrdersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutClientOrdersInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutClientOrdersInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutClientOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutClientOrdersInput>;
export const UserCreateOrConnectWithoutClientOrdersInputObjectZodSchema = makeSchema();
