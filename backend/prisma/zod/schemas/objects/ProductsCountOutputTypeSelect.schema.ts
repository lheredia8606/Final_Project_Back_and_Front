import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';


const makeSchema = () => z.object({
  productQty: z.boolean().optional()
}).strict();
export const ProductsCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ProductsCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProductsCountOutputTypeSelect>;
export const ProductsCountOutputTypeSelectObjectZodSchema = makeSchema();
