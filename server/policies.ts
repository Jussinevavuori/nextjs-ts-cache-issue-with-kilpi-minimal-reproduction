import { deny, grant, Policyset } from "@kilpi/core";
import { Subject } from "./subject";

export const policies = {
  documents: {
    read(user) {
      if (user?.name === "jon") return grant(user);

      return deny();
    },
  },
} as const satisfies Policyset<Subject | null>;
