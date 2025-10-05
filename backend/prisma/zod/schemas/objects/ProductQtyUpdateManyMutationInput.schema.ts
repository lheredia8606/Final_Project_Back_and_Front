import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  qty: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ProductQtyUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.ProductQtyUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductQtyUpdateManyMutationInput>;
export const ProductQtyUpdateManyMutationInputObjectZodSchema = makeSchema();
