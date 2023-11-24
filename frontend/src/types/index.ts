import { z } from "zod";
import { userStruct } from "../validators";

type User = z.infer<typeof userStruct>;

export type { User };
