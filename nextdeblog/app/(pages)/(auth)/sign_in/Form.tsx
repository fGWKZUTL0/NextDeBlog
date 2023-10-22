"use client"

import { signIn } from "next-auth/react"
import { AiFillGithub } from "react-icons/ai"

export default function Form(){
  return(
    <>
      <div className="flex flex-col gap-4 p-4 md:p-8">

        <div className="relative flex items-center justify-center">
          <span className="absolute inset-x-0 h-px bg-gray-300"></span>
          <span className="relative bg-white px-4 text-sm text-gray-400">Log in with social</span>
        </div>

        <button onClick={() => signIn(undefined, { callbackUrl: '/admin' })} className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-gray-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">
          <AiFillGithub />

          Continue with Github
        </button>
      </div>
    </>
  )
}
