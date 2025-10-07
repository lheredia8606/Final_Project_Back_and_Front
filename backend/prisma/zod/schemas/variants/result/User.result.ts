import * as z from 'zod';

import { RoleSchema } from '../../enums/Role.schema';
// prettier-ignore
export const UserResultSchema = z.object({
    id: z.number().int(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    password: z.string(),
    role: RoleSchema,
    phone: z.string(),
    isActive: z.boolean(),
    clientOrders: z.array(z.unknown()),
    workerOrders: z.array(z.unknown())
}).strict();

export type UserResultType = z.infer<typeof UserResultSchema>;
