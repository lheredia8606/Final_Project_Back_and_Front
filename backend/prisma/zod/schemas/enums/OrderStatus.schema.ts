import * as z from 'zod';

export const OrderStatusSchema = z.enum(['in_cart', 'ordered', 'processing', 'ready'])

export type OrderStatus = z.infer<typeof OrderStatusSchema>;