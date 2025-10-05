import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutWorkerOrdersInputObjectSchema as UserUpdateWithoutWorkerOrdersInputObjectSchema } from './UserUpdateWithoutWorkerOrdersInput.schema';
import { UserUncheckedUpdateWithoutWorkerOrdersInputObjectSchema as UserUncheckedUpdateWithoutWorkerOrdersInputObjectSchema } from './UserUncheckedUpdateWithoutWorkerOrdersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutWorkerOrdersInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutWorkerOrdersInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutWorkerOrdersInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutWorkerOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutWorkerOrdersInput>;
export const UserUpdateToOneWithWhereWithoutWorkerOrdersInputObjectZodSchema = makeSchema();
