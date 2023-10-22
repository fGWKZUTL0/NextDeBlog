import { getServerSession } from "next-auth"
import { nextAuthOptions } from "@/app/lib/auth/options"
import { User } from "@nextui-org/react"
import SignIn from "../../utils/SignIn"
import LinkAsButton from "../../utils/LinkasButton"

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
          <LinkAsButton href="/admin" color="secondary">
            管理画面
          </LinkAsButton>
        : 
          <SignIn /> 
        }
      </div>
    </header>
  )
}
