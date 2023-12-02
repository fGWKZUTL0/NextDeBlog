'use client'

import { ReactNode } from "react";
import { SessionProvider } from 'next-auth/react'
import { RecoilRoot } from "recoil";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export default function AppProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <ProgressBar
        height="2px"
        color="rgb(79 70 229)"
        options={{ showSpinner: false }}
        shallowRouting
      />
      <SessionProvider>
        <RecoilRoot>
          {children}
        </RecoilRoot>
      </SessionProvider>
    </>
  );
}
