import type { Metadata } from 'next'
import './globals.css'
import AppProvider from './providers/provider'
import NextTopLoader from 'nextjs-toploader';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <NextTopLoader />
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  )
}
