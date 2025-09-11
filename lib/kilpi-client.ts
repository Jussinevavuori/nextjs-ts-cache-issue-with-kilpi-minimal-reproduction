import type { Kilpi } from "@/server/kilpi";
import { createKilpiClient } from "@kilpi/client";
import { ReactClientComponentPlugin } from "@kilpi/react-client";

export const KilpiClient = createKilpiClient({
  infer: {} as typeof Kilpi, // Infer subject and policies from server instance
  connect: {
    endpointUrl: process.env.PUBLIC_KILPI_URL || "",
    secret: process.env.PUBLIC_KILPI_SECRET || "",
  },
  plugins: [ReactClientComponentPlugin()],
});
