'use client'

import { ReactNode } from "react";
import { SessionProvider } from 'next-auth/react'
import { RecoilRoot } from "recoil";

export default function AppProvider({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <RecoilRoot>
        {children}
      </RecoilRoot>
    </SessionProvider>
  );
}
