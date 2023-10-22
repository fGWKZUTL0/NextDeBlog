import RichPost from "@/app/components/public/post/RichPost"
import { getPost } from "@/app/servers/post/getPost"

type Props = {
  params: {
    postId: string
  }
}

export default async function Page({ params }: Props){
  const post = await getPost(params.postId)

  return(
    <>{
      "error" in post ? <span className="text-red-600 font-bold">{post.error}</span> :
      <>
        <RichPost post={post} />
      </>
    }
    </>
  )
}
