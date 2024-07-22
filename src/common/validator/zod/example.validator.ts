import { z } from 'zod';

export const userSchema = z.object({
  name: z.string().min(1, "Name is required"),
  age: z.number().int().positive("Age must be a positive integer"),
});