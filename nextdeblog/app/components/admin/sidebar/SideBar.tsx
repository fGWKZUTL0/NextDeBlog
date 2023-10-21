import { getServerSession } from "next-auth"
import SignOutButton from "./SignOutButton"
import { nextAuthOptions } from "@/app/lib/auth/options"

export default async function Sidebar(){
  const session = await getServerSession(nextAuthOptions)

  return(
    <section>
      {session?.user?.name}
      <SignOutButton />
    </section>
  )
}