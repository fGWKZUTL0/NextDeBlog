import { Post } from "@prisma/client";
import Link from "next/link";

export type PostProps = {
  post: Post
}

export default function Post({post}: PostProps){
  
  return(
    <>
      <div className="border-b-2 border-gray-200 py-4">
        <h1 className="text-2xl font-bold"> 
          <Link href={`/admin/post/${post.id}/edit`} className="hover:text-blue-600">
            {post.title} 
          </Link>
        </h1>
        <p className="text-gray-600 line-clamp-2">{post.content}</p>
      </div>
    </>
  )
}