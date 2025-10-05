import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { ProductQtyScalarWhereInputObjectSchema as ProductQtyScalarWhereInputObjectSchema } from './ProductQtyScalarWhereInput.schema';
import { ProductQtyUpdateManyMutationInputObjectSchema as ProductQtyUpdateManyMutationInputObjectSchema } from './ProductQtyUpdateManyMutationInput.schema';
import { ProductQtyUncheckedUpdateManyWithoutOrderInputObjectSchema as ProductQtyUncheckedUpdateManyWithoutOrderInputObjectSchema } from './ProductQtyUncheckedUpdateManyWithoutOrderInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductQtyScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ProductQtyUpdateManyMutationInputObjectSchema), z.lazy(() => ProductQtyUncheckedUpdateManyWithoutOrderInputObjectSchema)])
}).strict();
export const ProductQtyUpdateManyWithWhereWithoutOrderInputObjectSchema: z.ZodType<Prisma.ProductQtyUpdateManyWithWhereWithoutOrderInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductQtyUpdateManyWithWhereWithoutOrderInput>;
export const ProductQtyUpdateManyWithWhereWithoutOrderInputObjectZodSchema = makeSchema();
