import * as z from 'zod';

export const ProductTypeSchema = z.enum(['bag', 'mug', 't_Shirt'])

export type ProductType = z.infer<typeof ProductTypeSchema>;