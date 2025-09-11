"use client";

import { KilpiClient } from "@/lib/kilpi-client";

export function ClientComponent() {
  //   const { subject } = useSubject();

  //   console.log("subject", subject);

  async function fetchSubject() {
    const subject = await KilpiClient.fetchSubject();
    return subject;
  }

  return <h1>Hello World!</h1>;
}
