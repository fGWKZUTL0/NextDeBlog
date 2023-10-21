"use client"

import Sidebar from "@/app/components/admin/sidebar/SideBar"
import { signIn, useSession } from "next-auth/react"
import { useEffect } from "react"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const { data: session } = useSession()
  useEffect(() => {
    if (!session) {
      signIn();
    }
  }, [session]);

  return (
    <div className="flex">
      <Sidebar />
      <main>
        {children}
      </main>
    </div>
  )
}
