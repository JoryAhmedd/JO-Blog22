"use client";

import { useUser } from "@/context/UserContext";

export default function Home() {
  const { user } = useUser();

  return <div>{user && <p>Hello, {user.name}! Welcome to our Blog!!</p>}</div>;
}
