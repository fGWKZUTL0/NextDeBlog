import { getServerSession } from "next-auth"
import SignOut from "../../utils/SignOut"
import { nextAuthOptions } from "@/app/lib/auth/options"
import { User } from "@nextui-org/react"
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
      <div className="flex gap-x-4">
        <LinkAsButton href="/" color="primary">
          一般画面
        </LinkAsButton>
        <SignOut />
      </div>
    </header>
  )
}
