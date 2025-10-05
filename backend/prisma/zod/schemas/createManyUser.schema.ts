import type { Prisma } from '../../../generated/prisma';
import * as z from 'zod';
import { UserCreateManyInputObjectSchema as UserCreateManyInputObjectSchema } from './objects/UserCreateManyInput.schema';

export const UserCreateManySchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({ data: z.union([ UserCreateManyInputObjectSchema, z.array(UserCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.UserCreateManyArgs>;

export const UserCreateManyZodSchema = z.object({ data: z.union([ UserCreateManyInputObjectSchema, z.array(UserCreateManyInputObjectSchema) ]),  }).strict();