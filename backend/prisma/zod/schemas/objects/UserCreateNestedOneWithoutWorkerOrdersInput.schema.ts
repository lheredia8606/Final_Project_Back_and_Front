import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { UserCreateWithoutWorkerOrdersInputObjectSchema as UserCreateWithoutWorkerOrdersInputObjectSchema } from './UserCreateWithoutWorkerOrdersInput.schema';
import { UserUncheckedCreateWithoutWorkerOrdersInputObjectSchema as UserUncheckedCreateWithoutWorkerOrdersInputObjectSchema } from './UserUncheckedCreateWithoutWorkerOrdersInput.schema';
import { UserCreateOrConnectWithoutWorkerOrdersInputObjectSchema as UserCreateOrConnectWithoutWorkerOrdersInputObjectSchema } from './UserCreateOrConnectWithoutWorkerOrdersInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutWorkerOrdersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutWorkerOrdersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutWorkerOrdersInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutWorkerOrdersInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutWorkerOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutWorkerOrdersInput>;
export const UserCreateNestedOneWithoutWorkerOrdersInputObjectZodSchema = makeSchema();
