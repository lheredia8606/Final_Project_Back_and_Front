import type { Prisma } from "../../../generated/prisma";
import * as z from "zod";
import { OrdersOrderByWithRelationInputObjectSchema as OrdersOrderByWithRelationInputObjectSchema } from "./objects/OrdersOrderByWithRelationInput.schema";
import { OrdersWhereInputObjectSchema as OrdersWhereInputObjectSchema } from "./objects/OrdersWhereInput.schema";
import { OrdersWhereUniqueInputObjectSchema as OrdersWhereUniqueInputObjectSchema } from "./objects/OrdersWhereUniqueInput.schema";
import { OrdersCountAggregateInputObjectSchema as OrdersCountAggregateInputObjectSchema } from "./objects/OrdersCountAggregateInput.schema";
import { OrdersMinAggregateInputObjectSchema as OrdersMinAggregateInputObjectSchema } from "./objects/OrdersMinAggregateInput.schema";
import { OrdersMaxAggregateInputObjectSchema as OrdersMaxAggregateInputObjectSchema } from "./objects/OrdersMaxAggregateInput.schema";
import { OrdersAvgAggregateInputObjectSchema as OrdersAvgAggregateInputObjectSchema } from "./objects/OrdersAvgAggregateInput.schema";
import { OrdersSumAggregateInputObjectSchema as OrdersSumAggregateInputObjectSchema } from "./objects/OrdersSumAggregateInput.schema";

export const OrdersAggregateSchema: z.ZodType<Prisma.OrdersAggregateArgs> = z
  .object({
    orderBy: z
      .union([
        OrdersOrderByWithRelationInputObjectSchema,
        OrdersOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: OrdersWhereInputObjectSchema.optional(),
    cursor: OrdersWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    _count: z
      .union([z.literal(true), OrdersCountAggregateInputObjectSchema])
      .optional(),
    _min: OrdersMinAggregateInputObjectSchema.optional(),
    _max: OrdersMaxAggregateInputObjectSchema.optional(),
    _avg: OrdersAvgAggregateInputObjectSchema.optional(),
    _sum: OrdersSumAggregateInputObjectSchema.optional(),
  })
  .strict() as unknown as z.ZodType<Prisma.OrdersAggregateArgs>;

export const OrdersAggregateZodSchema = z
  .object({
    orderBy: z
      .union([
        OrdersOrderByWithRelationInputObjectSchema,
        OrdersOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: OrdersWhereInputObjectSchema.optional(),
    cursor: OrdersWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    _count: z
      .union([z.literal(true), OrdersCountAggregateInputObjectSchema])
      .optional(),
    _min: OrdersMinAggregateInputObjectSchema.optional(),
    _max: OrdersMaxAggregateInputObjectSchema.optional(),
    _avg: OrdersAvgAggregateInputObjectSchema.optional(),
    _sum: OrdersSumAggregateInputObjectSchema.optional(),
  })
  .strict();
