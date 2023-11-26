"use client"

import { User } from "@nextui-org/react"
import { useSession } from "next-auth/react";

export default function UserIcon(){
  const { data: session, status } = useSession()

  return(
    <User
      name={session?.user?.name}
      avatarProps={{
        src: session?.user?.image || "",
        showFallback: true,
      }}
    />
  )
}
