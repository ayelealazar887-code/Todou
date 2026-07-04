import { getUsers } from "@/server/users";
import Image from "next/image";

export default async function Home() {
  const getUser = await getUsers();
  return (
    <div>
      <h1>Users</h1>
      <pre>{JSON.stringify(getUser, null, 2)}</pre>
    </div>
  );
}
