import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutClientOrdersInputObjectSchema as UserUpdateWithoutClientOrdersInputObjectSchema } from './UserUpdateWithoutClientOrdersInput.schema';
import { UserUncheckedUpdateWithoutClientOrdersInputObjectSchema as UserUncheckedUpdateWithoutClientOrdersInputObjectSchema } from './UserUncheckedUpdateWithoutClientOrdersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutClientOrdersInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutClientOrdersInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutClientOrdersInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutClientOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutClientOrdersInput>;
export const UserUpdateToOneWithWhereWithoutClientOrdersInputObjectZodSchema = makeSchema();
