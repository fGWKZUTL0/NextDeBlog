import { UserType } from "@/app/types/user";
import { User } from "@nextui-org/react";
import { Post } from "@prisma/client";
import Link from "next/link";

export type PostProps = {
  post: Post & {
    user: UserType
  }
}

export default function Post({post}: PostProps){
  const updatedAtJPNText = [
    `${post.updatedAt.getFullYear()}年`,
    `${post.updatedAt.getMonth() + 1}月`,
    `${post.updatedAt.getDate()}日`,
    `${post.updatedAt.getHours()}時`,
    `${post.updatedAt.getMinutes()}分`,
    `${post.updatedAt.getSeconds()}秒`,
  ]
  
  return(
    <>
      <div className="border-b-2 border-gray-200 py-4">
        <User   
          name={post?.user?.name}
          avatarProps={{
            src: post?.user?.image || ""
          }}
        />
        <h1 className="text-2xl font-bold"> 
          <Link href={`/post/${post.id}/`} className="text-blue-600 md:text-black md:hover:text-blue-600">
            {post.title} 
          </Link>
        </h1>
        <p className="text-gray-600 line-clamp-2">{post.content}</p>
        <p className="mt-2">最終更新日: {updatedAtJPNText.join("")}</p>
      </div>
    </>
  )
}
