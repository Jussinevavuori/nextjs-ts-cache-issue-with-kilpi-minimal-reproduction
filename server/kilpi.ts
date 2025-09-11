import { createKilpi, EndpointPlugin } from "@kilpi/core";
import { policies } from "./policies";
import { getSubject } from "./subject";

export const Kilpi = createKilpi({
  getSubject,
  policies,
  plugins: [EndpointPlugin({ secret: process.env.PUBLIC_KILPI_SECRET || "" })],
});
