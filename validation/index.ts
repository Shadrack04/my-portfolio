import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  email: z.string().email(),

  message: z.string().min(10, "Message should be at least 10 characters long"),
});

export type FormSchema = z.infer<typeof formSchema>;
