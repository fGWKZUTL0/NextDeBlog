import { UserType } from "@/app/types/user";
import { User } from "@nextui-org/react";
import { Post as PostType } from "@prisma/client";
import Link from "next/link";
import DestroyModal from "../../admin/post/DestroyModal";

export type PostProps = {
  post: PostType & {
    user: UserType
  },
  isAdmin?: boolean
}

export default function Post({post, isAdmin = false}: PostProps){
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
      <div className="group flex flex-1 items-center justify-between w-full border-b-2 border-gray-200">
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
        <div className="hidden group-hover:block">
          { isAdmin && <DestroyModal post={post} />}
        </div>
      </div>
    </>
  )
}
