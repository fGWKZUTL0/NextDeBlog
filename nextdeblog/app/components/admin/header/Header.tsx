import { getServerSession } from "next-auth"
import SignOut from "../../utils/SignOut"
import { nextAuthOptions } from "@/app/lib/auth/options"
import { User } from "@nextui-org/react"
import LinkAsButton from "../../utils/LinkasButton"

export default async function Header(){
  const session = await getServerSession(nextAuthOptions)

  return(
    <header className="flex w-full bg-white text-xl font-semibol py-2">
      <h1 className="hidden whitespace-nowrap text-2xl font-bold md:block">管理画面</h1>
      <div className="flex justify-between md:justify-end gap-x-4 w-full">
        <User   
          name={session?.user?.name}
          avatarProps={{
            src: session?.user?.image || ""
          }}
        />
        <div className="flex gap-x-4">
          <LinkAsButton href="/" color="primary">
            一般画面へ
          </LinkAsButton>
          <SignOut />
        </div>
      </div>
    </header>
  )
}
