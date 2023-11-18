import { getPost } from "@/app/servers/post/getPost"
import Form from "../../../(form)/Form"
import { useEffect, useState } from "react"
import { PostFormType } from "@/app/types/post"

type Props = {
  params: {
    postId: string
  }
}

export default async function Page({ params }: Props){
  const serverPost = await getPost(params.postId);

  return(
    <div className="w-full md:w-1/2">
      <Form defaultValuesJSON={serverPost} formMode="edit" />
    </div>
  )
} 
