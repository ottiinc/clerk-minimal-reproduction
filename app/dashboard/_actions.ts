"use server";

export async function generateActorToken(actorId: string, userId: string) {
  const params = JSON.stringify({
    user_id: userId,
    actor: {
      sub: actorId,
    },
  });

  // Create an actor token using Clerk's Backend API
  const res = await fetch("https://api.clerk.com/v1/actor_tokens", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
      "Content-type": "application/json",
    },
    body: params,
  });

  if (!res.ok) {
    return { ok: false, message: "Failed to generate actor token" };
  }
  const data = await res.json();

  return { ok: true, token: data.token };
}
