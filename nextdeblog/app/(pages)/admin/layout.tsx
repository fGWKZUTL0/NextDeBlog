import { getServerSession } from "next-auth/next"
import Header from "@/app/components/admin/header/Header"
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
    <>
      <main className="mx-6">
        <div className="md:w-[70vw] md:mx-auto">
          <Header />
          {children}
        </div>
      </main>
    </>
  )
}
