import * as z from 'zod';

import { OrderStatusSchema } from '../../enums/OrderStatus.schema';
// prettier-ignore
export const OrdersModelSchema = z.object({
    id: z.number().int(),
    clientId: z.number().int(),
    client: z.unknown(),
    workerId: z.number().int().nullable(),
    worker: z.unknown().nullable(),
    deadLine: z.date().nullable(),
    status: OrderStatusSchema,
    productQty: z.array(z.unknown())
}).strict();

export type OrdersModelType = z.infer<typeof OrdersModelSchema>;
