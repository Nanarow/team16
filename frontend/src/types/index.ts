import { z } from "zod";
import { ValidUser } from "../validators";

type User = z.infer<typeof ValidUser>;

export type { User };
