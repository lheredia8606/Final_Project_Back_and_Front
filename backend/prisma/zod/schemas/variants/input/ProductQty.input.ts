import * as z from 'zod';

// prettier-ignore
export const ProductQtyInputSchema = z.object({
    id: z.number().int(),
    orderId: z.number().int(),
    productId: z.number().int(),
    qty: z.number().int(),
    order: z.unknown(),
    product: z.unknown()
}).strict();

export type ProductQtyInputType = z.infer<typeof ProductQtyInputSchema>;
