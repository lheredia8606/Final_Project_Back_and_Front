import * as z from 'zod';

export const RoleSchema = z.enum(['client', 'worker', 'admin'])

export type Role = z.infer<typeof RoleSchema>;