import { getServerSession } from "next-auth"
import SignOut from "../../utils/SignOut"
import { nextAuthOptions } from "@/app/lib/auth/options"
import { Button, User } from "@nextui-org/react"
import SignIn from "../../utils/SignIn"
import Link from "next/link"

export default async function Header(){
  const session = await getServerSession(nextAuthOptions)

  return(
    <header className="flex justify-between w-full bg-white md:justify-end text-xl font-semibol py-2">
      <div className="flex items-center md:mx-6">
        <User   
          name={session?.user?.name}
          avatarProps={{
            src: session?.user?.image || ""
          }}
        />
      </div>
      <div>
        { session?.user ?
        <Link href="/admin">
          <Button color="secondary">
            管理画面
          </Button>
        </Link>
        : 
          <SignIn /> 
        }
      </div>
    </header>
  )
}
