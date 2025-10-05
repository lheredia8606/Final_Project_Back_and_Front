import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutWorkerOrdersInputObjectSchema as UserCreateWithoutWorkerOrdersInputObjectSchema } from './UserCreateWithoutWorkerOrdersInput.schema';
import { UserUncheckedCreateWithoutWorkerOrdersInputObjectSchema as UserUncheckedCreateWithoutWorkerOrdersInputObjectSchema } from './UserUncheckedCreateWithoutWorkerOrdersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutWorkerOrdersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutWorkerOrdersInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutWorkerOrdersInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutWorkerOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutWorkerOrdersInput>;
export const UserCreateOrConnectWithoutWorkerOrdersInputObjectZodSchema = makeSchema();
