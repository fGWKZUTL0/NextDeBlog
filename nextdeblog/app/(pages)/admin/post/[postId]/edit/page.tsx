import { getPost } from "@/app/servers/post/getPost"
import Form from "../../../(form)/Form"
import { defaultValuesJSON } from "../../../(home)/page"

type Props = {
  params: {
    postId: string
  }
}

export default async function Page({ params }: Props){
  const postOrError = await getPost(params.postId)
  let error = null

  if("error" in postOrError){
    error = postOrError.error
  }else{
    defaultValuesJSON.defaultValues = {
      title: postOrError.title,
      content: postOrError.content
    }
  }

  return(
    <div className="w-full md:w-1/2">
      {error && <span className="text-red-600 font-bold">{error}</span>}
      <Form defaultValuesJSON={defaultValuesJSON} formMode="edit" />
    </div>
  )
} 