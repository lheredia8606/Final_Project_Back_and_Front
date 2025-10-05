import type { Prisma } from '../../../generated/prisma';
import * as z from 'zod';
import { ProductQtySelectObjectSchema as ProductQtySelectObjectSchema } from './objects/ProductQtySelect.schema';
import { ProductQtyCreateManyInputObjectSchema as ProductQtyCreateManyInputObjectSchema } from './objects/ProductQtyCreateManyInput.schema';

export const ProductQtyCreateManyAndReturnSchema: z.ZodType<Prisma.ProductQtyCreateManyAndReturnArgs> = z.object({ select: ProductQtySelectObjectSchema.optional(), data: z.union([ ProductQtyCreateManyInputObjectSchema, z.array(ProductQtyCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.ProductQtyCreateManyAndReturnArgs>;

export const ProductQtyCreateManyAndReturnZodSchema = z.object({ select: ProductQtySelectObjectSchema.optional(), data: z.union([ ProductQtyCreateManyInputObjectSchema, z.array(ProductQtyCreateManyInputObjectSchema) ]),  }).strict();