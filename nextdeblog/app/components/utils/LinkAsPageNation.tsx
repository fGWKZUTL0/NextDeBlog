"use client"

import { Pagination } from "@nextui-org/react"
import { usePathname, useRouter } from "next/navigation"

interface PageNationProps {
  pageNum: number
  totalPage: number
}

export default function LinkAsPageNation({pageNum, totalPage}: PageNationProps) {
  const router = useRouter()
  const pathname = usePathname();

  return(
    <Pagination
      total={totalPage}
      initialPage={pageNum}
      showControls
      onChange={(page) => {
        router.push(`${pathname}?page=${page}`)
      }}
    />
  )
}
