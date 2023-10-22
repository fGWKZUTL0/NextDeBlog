"use client"

import { Button } from "@nextui-org/react"
import { useRouter } from "next/navigation"

type Props = {
  href: string
  children: React.ReactNode
  className?: string
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger"
}

export default function LinkAsButton({href, children, className, color}: Props) {
  const router = useRouter()

  return(
    <Button color={color} className={className} onClick={() => router.push(href)}>
      {children}
    </Button>
  )
}
