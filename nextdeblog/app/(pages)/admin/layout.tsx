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
      <main className="w-[90vw] md:w-[70vw] mx-auto">
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-between bg-white md:justify-end text-xl font-semibol py-2 w-[90vw] md:w-[70vw] mx-auto">
          <Header />
        </div>
        <div className="mt-20">
          {children}
        </div>
      </main>
    </>
  )
}
