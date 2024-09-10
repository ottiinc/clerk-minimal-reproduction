import { clerkClient } from "@clerk/nextjs/server";
import ImpersonateUsers from "./_components";

export default async function AccountPage() {
  // Fetch list of application's users using Clerk's Backend SDK
  const users = await clerkClient.users.getUserList();

  // This page needs to be a server component to use clerkClient.users.getUserList()
  // You must pass the list of users to the client for the rest of the logic
  // But you cannot pass the entire User object to the client,
  // because its too complex. So grab the data you need, like so:
  const parsedUsers = [];
  for (const user of users.data) {
    parsedUsers.push({
      id: user.id,
      email: user.primaryEmailAddress?.emailAddress,
    });
  }

  // Pass the parsed users to the Client Component
  return <ImpersonateUsers users={parsedUsers} />;
}
