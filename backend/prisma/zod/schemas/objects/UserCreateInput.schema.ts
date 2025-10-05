import * as z from "zod";
import type { Prisma } from "../../../../generated/prisma/index.js";
import { RoleSchema } from "../enums/Role.schema.js";
import { OrdersCreateNestedManyWithoutClientInputObjectSchema as OrdersCreateNestedManyWithoutClientInputObjectSchema } from "./OrdersCreateNestedManyWithoutClientInput.schema.js";
import { OrdersCreateNestedManyWithoutWorkerInputObjectSchema as OrdersCreateNestedManyWithoutWorkerInputObjectSchema } from "./OrdersCreateNestedManyWithoutWorkerInput.schema.js";

const makeSchema = () =>
  z
    .object({
      firstName: z.string(),
      lastName: z.string(),
      email: z.string(),
      passwordHash: z.string(),
      role: RoleSchema.optional(),
      phone: z.string(),
      isActive: z.boolean(),
      clientOrders: z.lazy(
        () => OrdersCreateNestedManyWithoutClientInputObjectSchema
      ),
      workerOrders: z.lazy(
        () => OrdersCreateNestedManyWithoutWorkerInputObjectSchema
      ),
    })
    .strict();
export const UserCreateInputObjectSchema: z.ZodType<Prisma.UserCreateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.UserCreateInput>;
export const UserCreateInputObjectZodSchema = makeSchema();
