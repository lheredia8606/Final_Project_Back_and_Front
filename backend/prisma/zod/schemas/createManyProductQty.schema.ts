import type { Prisma } from '../../../generated/prisma';
import * as z from 'zod';
import { ProductQtyCreateManyInputObjectSchema as ProductQtyCreateManyInputObjectSchema } from './objects/ProductQtyCreateManyInput.schema';

export const ProductQtyCreateManySchema: z.ZodType<Prisma.ProductQtyCreateManyArgs> = z.object({ data: z.union([ ProductQtyCreateManyInputObjectSchema, z.array(ProductQtyCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.ProductQtyCreateManyArgs>;

export const ProductQtyCreateManyZodSchema = z.object({ data: z.union([ ProductQtyCreateManyInputObjectSchema, z.array(ProductQtyCreateManyInputObjectSchema) ]),  }).strict();