import * as z from 'zod';
export const UserAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    firstName: z.number(),
    lastName: z.number(),
    email: z.number(),
    password: z.number(),
    role: z.number(),
    phone: z.number(),
    isActive: z.number(),
    clientOrders: z.number(),
    workerOrders: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    firstName: z.string().nullable(),
    lastName: z.string().nullable(),
    email: z.string().nullable(),
    password: z.string().nullable(),
    phone: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    firstName: z.string().nullable(),
    lastName: z.string().nullable(),
    email: z.string().nullable(),
    password: z.string().nullable(),
    phone: z.string().nullable()
  }).nullable().optional()});