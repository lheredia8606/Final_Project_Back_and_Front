import * as z from "zod";

import { ProductTypeSchema } from "../../enums/ProductType.schema.js";
// prettier-ignore
export const ProductsInputSchema = z.object({
    id: z.number().int(),
    type: ProductTypeSchema,
    name: z.string(),
    inStock: z.boolean(),
    image: z.string(),
    price: z.number(),
    productQty: z.array(z.unknown())
}).strict();

export type ProductsInputType = z.infer<typeof ProductsInputSchema>;
