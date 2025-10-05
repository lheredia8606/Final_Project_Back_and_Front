import type { Prisma } from '../../../generated/prisma';
import * as z from 'zod';
import { ProductsSelectObjectSchema as ProductsSelectObjectSchema } from './objects/ProductsSelect.schema';
import { ProductsCreateManyInputObjectSchema as ProductsCreateManyInputObjectSchema } from './objects/ProductsCreateManyInput.schema';

export const ProductsCreateManyAndReturnSchema: z.ZodType<Prisma.ProductsCreateManyAndReturnArgs> = z.object({ select: ProductsSelectObjectSchema.optional(), data: z.union([ ProductsCreateManyInputObjectSchema, z.array(ProductsCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.ProductsCreateManyAndReturnArgs>;

export const ProductsCreateManyAndReturnZodSchema = z.object({ select: ProductsSelectObjectSchema.optional(), data: z.union([ ProductsCreateManyInputObjectSchema, z.array(ProductsCreateManyInputObjectSchema) ]),  }).strict();