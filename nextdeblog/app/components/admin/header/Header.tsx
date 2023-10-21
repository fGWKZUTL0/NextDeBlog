import { getServerSession } from "next-auth"
import SignOut from "./SignOut"
import { nextAuthOptions } from "@/app/lib/auth/options"

export default async function Header(){
  const session = await getServerSession(nextAuthOptions)

  return(
    <header className="flex justify-between md:justify-end text-xl font-semibol py-2 md:mx-12">
      <div className="flex items-center md:mx-6">{session?.user?.name}</div>
      <SignOut />
    </header>
  )
}