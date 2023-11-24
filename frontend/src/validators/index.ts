import { z } from "zod";

const ValidUser = z.object({
  name: z.string().min(1, "Name is required"),
  age: z.number(),
});

export { ValidUser };
