import Posts from "@/app/components/public/post/Posts";
import { Suspense } from "react";

interface Props {
  searchParams: { [key: string]: string | undefined }
}


export default async function Page({searchParams}: Props){
  const pageNum = parseInt(searchParams.page || "1")

  return(
    <>
    <Suspense>
      <Posts pageNum={pageNum}/>
    </Suspense>
    </>
  )
}
