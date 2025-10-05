import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { ProductQtyScalarWhereInputObjectSchema as ProductQtyScalarWhereInputObjectSchema } from './ProductQtyScalarWhereInput.schema';
import { ProductQtyUpdateManyMutationInputObjectSchema as ProductQtyUpdateManyMutationInputObjectSchema } from './ProductQtyUpdateManyMutationInput.schema';
import { ProductQtyUncheckedUpdateManyWithoutProductInputObjectSchema as ProductQtyUncheckedUpdateManyWithoutProductInputObjectSchema } from './ProductQtyUncheckedUpdateManyWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductQtyScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ProductQtyUpdateManyMutationInputObjectSchema), z.lazy(() => ProductQtyUncheckedUpdateManyWithoutProductInputObjectSchema)])
}).strict();
export const ProductQtyUpdateManyWithWhereWithoutProductInputObjectSchema: z.ZodType<Prisma.ProductQtyUpdateManyWithWhereWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductQtyUpdateManyWithWhereWithoutProductInput>;
export const ProductQtyUpdateManyWithWhereWithoutProductInputObjectZodSchema = makeSchema();
