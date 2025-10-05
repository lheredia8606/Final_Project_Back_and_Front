import * as z from "zod";

import { OrderStatusSchema } from "../../enums/OrderStatus.schema.js";
// prettier-ignore
export const OrdersInputSchema = z.object({
    id: z.number().int(),
    clientId: z.number().int(),
    client: z.unknown(),
    workerId: z.number().int().optional().nullable(),
    worker: z.unknown().optional().nullable(),
    deadLine: z.date().optional().nullable(),
    status: OrderStatusSchema,
    productQty: z.array(z.unknown())
}).strict();

export type OrdersInputType = z.infer<typeof OrdersInputSchema>;
