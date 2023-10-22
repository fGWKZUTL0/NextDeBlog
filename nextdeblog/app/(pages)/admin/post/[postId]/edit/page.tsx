import { getPost } from "@/app/servers/post/getPost"
import Form from "../../../(form)/Form"

type Props = {
  params: {
    postId: string
  }
}

export default async function Page({ params }: Props){
  const postOrError = await getPost(params.postId)
  let error = null

  return(
    <div className="w-full md:w-1/2">
      {error && <span className="text-red-600 font-bold">{error}</span>}
      <Form postId={params.postId} defaultValuesJSON={postOrError} formMode="edit" />
    </div>
  )
} 
