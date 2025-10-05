import type { Prisma } from '../../../generated/prisma';
import * as z from 'zod';
import { ProductsCreateManyInputObjectSchema as ProductsCreateManyInputObjectSchema } from './objects/ProductsCreateManyInput.schema';

export const ProductsCreateManySchema: z.ZodType<Prisma.ProductsCreateManyArgs> = z.object({ data: z.union([ ProductsCreateManyInputObjectSchema, z.array(ProductsCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.ProductsCreateManyArgs>;

export const ProductsCreateManyZodSchema = z.object({ data: z.union([ ProductsCreateManyInputObjectSchema, z.array(ProductsCreateManyInputObjectSchema) ]),  }).strict();