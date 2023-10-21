import { nextAuthOptions } from "@/app/lib/auth/options"
import { getServerSession } from "next-auth"

export default async function Page(){
  const session = await getServerSession(nextAuthOptions)

  return(
    <>
      <span>{session?.user?.name}</span>
    </>
  )
} 