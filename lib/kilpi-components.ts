import { KilpiClient } from "./kilpi-client";

export const {
  // Utility hooks that wrap KilpiClient methods
  useIsAuthorized,
  useSubject,

  // Utility component that wraps useIsAuthorized
  ClientAccess,
} = KilpiClient.ReactClient.createComponents();
