import Posts from "@/app/components/admin/post/Posts"
import Form from "../(form)/Form"
import { getMyPosts } from "@/app/servers/post/getMyPosts";
import { Suspense } from "react";

export default async function Page(){
  const postsOrError = await getMyPosts();
  
  const defaultValuesJSON = {
    defaultValues: {
      title: "",
      content: ""
    }
  }

  return(
    <div className="w-full md:w-1/2">
      <Form defaultValuesJSON={defaultValuesJSON.defaultValues} formMode="create" />
      <Suspense fallback={<div>Loading...</div>}>
        <Posts postsOrError={postsOrError} />
      </Suspense>
    </div>
  )
} 
