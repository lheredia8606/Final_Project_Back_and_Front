import * as z from "zod";

import { RoleSchema } from "../../enums/Role.schema.js";
// prettier-ignore
export const UserInputSchema = z.object({
    id: z.number().int(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    passwordHash: z.string(),
    role: RoleSchema,
    phone: z.string(),
    isActive: z.boolean(),
    clientOrders: z.array(z.unknown()),
    workerOrders: z.array(z.unknown())
}).strict();

export type UserInputType = z.infer<typeof UserInputSchema>;
