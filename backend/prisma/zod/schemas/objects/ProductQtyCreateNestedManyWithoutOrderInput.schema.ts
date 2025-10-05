import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { ProductQtyCreateWithoutOrderInputObjectSchema as ProductQtyCreateWithoutOrderInputObjectSchema } from './ProductQtyCreateWithoutOrderInput.schema';
import { ProductQtyUncheckedCreateWithoutOrderInputObjectSchema as ProductQtyUncheckedCreateWithoutOrderInputObjectSchema } from './ProductQtyUncheckedCreateWithoutOrderInput.schema';
import { ProductQtyCreateOrConnectWithoutOrderInputObjectSchema as ProductQtyCreateOrConnectWithoutOrderInputObjectSchema } from './ProductQtyCreateOrConnectWithoutOrderInput.schema';
import { ProductQtyCreateManyOrderInputEnvelopeObjectSchema as ProductQtyCreateManyOrderInputEnvelopeObjectSchema } from './ProductQtyCreateManyOrderInputEnvelope.schema';
import { ProductQtyWhereUniqueInputObjectSchema as ProductQtyWhereUniqueInputObjectSchema } from './ProductQtyWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductQtyCreateWithoutOrderInputObjectSchema), z.lazy(() => ProductQtyCreateWithoutOrderInputObjectSchema).array(), z.lazy(() => ProductQtyUncheckedCreateWithoutOrderInputObjectSchema), z.lazy(() => ProductQtyUncheckedCreateWithoutOrderInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProductQtyCreateOrConnectWithoutOrderInputObjectSchema), z.lazy(() => ProductQtyCreateOrConnectWithoutOrderInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProductQtyCreateManyOrderInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ProductQtyWhereUniqueInputObjectSchema), z.lazy(() => ProductQtyWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ProductQtyCreateNestedManyWithoutOrderInputObjectSchema: z.ZodType<Prisma.ProductQtyCreateNestedManyWithoutOrderInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductQtyCreateNestedManyWithoutOrderInput>;
export const ProductQtyCreateNestedManyWithoutOrderInputObjectZodSchema = makeSchema();
