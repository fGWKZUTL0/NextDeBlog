import SignOut from "../../utils/SignOut"
import LinkAsButton from "../../utils/LinkAsButton"
import UserIcon from "./UserIcon"

export default async function Header(){
  return(
    <header className="flex w-full bg-white text-xl font-semibol py-2">
      <h1 className="hidden whitespace-nowrap text-2xl font-bold md:block">管理画面</h1>
      <div className="flex justify-between md:justify-end gap-x-4 w-full">
        <div className="flex gap-x-4">
          <UserIcon />
          <LinkAsButton href="/" color="primary">
            一般画面へ
          </LinkAsButton>
          <SignOut />
        </div>
      </div>
    </header>
  )
}
