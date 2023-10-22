import { getPost } from "@/app/servers/post/getPost"
import { User } from "@nextui-org/react"

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
        <h1>{post.title}</h1>
        <User   
          name={post?.user?.name}
          avatarProps={{
            src: post?.user?.image || ""
          }}
        />
      </>
    }
    </>
  )
}
