'use client'

import { SessionProvider, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

const NextAuthProvider = ({ children }: { children: ReactNode }) => {
  
  return <SessionProvider>{children}</SessionProvider>
}

export default NextAuthProvider
