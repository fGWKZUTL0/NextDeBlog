import { nextAuthOptions } from "@/app/lib/auth/options"
import { getServerSession } from "next-auth"
import { signIn, signOut, useSession } from "next-auth/react"
import SignOutButton from "./SignOutButton"

export default async function Sidebar(){
  return(
    <section>
      <SignOutButton />
    </section>
  )
}