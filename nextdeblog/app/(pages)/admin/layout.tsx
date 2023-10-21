import { getServerSession } from "next-auth/next"
import Sidebar from "@/app/components/admin/sidebar/SideBar"
import { nextAuthOptions } from "@/app/lib/auth/options"
import { redirect } from "next/navigation"

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(nextAuthOptions)
  !session && redirect(`/sign_in`)

  return (
    <div className="flex">
      <Sidebar />
      <main>
        {children}
      </main>
    </div>
  )
}
