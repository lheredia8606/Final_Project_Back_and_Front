import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { ProductQtyCreateManyOrderInputObjectSchema as ProductQtyCreateManyOrderInputObjectSchema } from './ProductQtyCreateManyOrderInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ProductQtyCreateManyOrderInputObjectSchema), z.lazy(() => ProductQtyCreateManyOrderInputObjectSchema).array()])
}).strict();
export const ProductQtyCreateManyOrderInputEnvelopeObjectSchema: z.ZodType<Prisma.ProductQtyCreateManyOrderInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ProductQtyCreateManyOrderInputEnvelope>;
export const ProductQtyCreateManyOrderInputEnvelopeObjectZodSchema = makeSchema();
