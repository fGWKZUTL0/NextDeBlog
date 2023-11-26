import RichPost from "@/app/components/public/post/RichPost"
import { getPost } from "@/app/servers/post/getPost"

type Props = {
  params: {
    postId: string
  }
}

export default async function Page({ params }: Props){
  try{
    const post = await getPost(params.postId)

    return(
      <>
        <RichPost post={post} />
      </>
    )
  }catch(error){
    console.log(error)
  }
}
