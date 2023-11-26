import Posts from "@/app/components/admin/post/Posts"
import Form from "../(form)/Form"
import { Suspense } from "react";

interface Props {
  searchParams: { [key: string]: string | undefined }
}

export default async function Page({searchParams}: Props){
  const pageNum = parseInt(searchParams.page || "1")

  const defaultValuesJSON = {
    defaultValues: {
      title: "",
      content: ""
    }
  }

  return(
    <div className="w-full md:w-1/2">
      <Form defaultValuesJSON={defaultValuesJSON.defaultValues} formMode="create" />
      <Suspense>
        <Posts pageNum={pageNum}/>
      </Suspense>
    </div>
  )
} 
