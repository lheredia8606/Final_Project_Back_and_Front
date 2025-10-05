import * as z from 'zod';

export const ProductQtyScalarFieldEnumSchema = z.enum(['id', 'orderId', 'productId', 'qty'])

export type ProductQtyScalarFieldEnum = z.infer<typeof ProductQtyScalarFieldEnumSchema>;