import * as z from 'zod';
export const UserUpdateResultSchema = z.nullable(z.object({
  id: z.number().int(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  password: z.string(),
  role: z.unknown(),
  phone: z.string(),
  isActive: z.boolean(),
  clientOrders: z.array(z.unknown()),
  workerOrders: z.array(z.unknown())
}));