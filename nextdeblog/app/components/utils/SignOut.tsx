"use client"

import { Button } from "@nextui-org/react"
import { signOut } from "next-auth/react"

export default function SignOut(){

  return(
    <>
      <Button color="warning" className="text-white" onClick={() => signOut({callbackUrl: ("/sign_in")})}>
        ログアウト
      </Button> 
    </>
  )
}
