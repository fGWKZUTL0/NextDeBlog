"use client"

import { signOut } from "next-auth/react"

export default function SignOutButton(){

  return(
    <>
      <button
        onClick={() => signOut({callbackUrl: ("/sign_in")})}
        className='flex w-full justify-center border-2 border-b border-green-300 bg-green-200 pb-6 pt-8 backdrop-blur-2xl dark:border-green-800 dark:bg-green-800/30 lg:static lg:w-auto lg:rounded-xl lg:p-4 hover:border-green-400 hover:bg-green-300 dark:hover:border-green-900 dark:hover:bg-green-900/30'
      >
        Sign Out
      </button>
    </>
  )
}