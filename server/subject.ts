export async function getSubject() {
  const session = {
    id: "uuid",
    email: "jon.doe@mail.com",
    name: "jon",
  };

  if (!session) return null;

  return { id: session.id, email: session.email, name: session.name };
}

/**
 * Automatically infer the subject type from the getSubject function.
 */
export type Subject = Awaited<ReturnType<typeof getSubject>>;
