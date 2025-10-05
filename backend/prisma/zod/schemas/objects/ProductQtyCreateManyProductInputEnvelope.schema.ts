import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { ProductQtyCreateManyProductInputObjectSchema as ProductQtyCreateManyProductInputObjectSchema } from './ProductQtyCreateManyProductInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ProductQtyCreateManyProductInputObjectSchema), z.lazy(() => ProductQtyCreateManyProductInputObjectSchema).array()])
}).strict();
export const ProductQtyCreateManyProductInputEnvelopeObjectSchema: z.ZodType<Prisma.ProductQtyCreateManyProductInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ProductQtyCreateManyProductInputEnvelope>;
export const ProductQtyCreateManyProductInputEnvelopeObjectZodSchema = makeSchema();
