"use client"

import { Button } from "@nextui-org/react"
import Link from "next/link"

export default function SignIn(){

  return(
    <>
      <Link href="/sign_in">
        <Button color="warning" className="text-white">
          ログインする
        </Button>
      </Link>
    </>
  )
}
