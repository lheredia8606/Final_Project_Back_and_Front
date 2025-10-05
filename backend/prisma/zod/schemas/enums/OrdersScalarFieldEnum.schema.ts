import * as z from 'zod';

export const OrdersScalarFieldEnumSchema = z.enum(['id', 'clientId', 'workerId', 'deadLine', 'status'])

export type OrdersScalarFieldEnum = z.infer<typeof OrdersScalarFieldEnumSchema>;