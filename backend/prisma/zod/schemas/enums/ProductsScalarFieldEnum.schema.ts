import * as z from 'zod';

export const ProductsScalarFieldEnumSchema = z.enum(['id', 'type', 'name', 'inStock', 'image', 'price'])

export type ProductsScalarFieldEnum = z.infer<typeof ProductsScalarFieldEnumSchema>;