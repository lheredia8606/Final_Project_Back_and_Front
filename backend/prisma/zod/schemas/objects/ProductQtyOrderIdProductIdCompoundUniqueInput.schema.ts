import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';


const makeSchema = () => z.object({
  orderId: z.number().int(),
  productId: z.number().int()
}).strict();
export const ProductQtyOrderIdProductIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.ProductQtyOrderIdProductIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductQtyOrderIdProductIdCompoundUniqueInput>;
export const ProductQtyOrderIdProductIdCompoundUniqueInputObjectZodSchema = makeSchema();
