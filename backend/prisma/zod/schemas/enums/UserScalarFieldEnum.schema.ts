import * as z from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'firstName', 'lastName', 'email', 'passwordHash', 'role', 'phone', 'isActive'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;