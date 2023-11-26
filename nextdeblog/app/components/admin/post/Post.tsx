"use client"

import { Post } from "@prisma/client";
import Link from "next/link";
import DestroyModal from "./DestroyModal";

export type PostProps = {
  post: Post
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
      <div className="group flex flex-1 items-center justify-between w-full border-b-2 border-gray-200">
        <div className="py-4">
          <h1 className="text-2xl font-bold"> 
            <Link href={`/admin/post/${post.id}/edit`} className="text-blue-600 md:text-black md:hover:text-blue-600">
              {post.title} 
            </Link>
          </h1>
          <p className="text-gray-600 line-clamp-2">{post.content}</p>
          <p className="mt-2">最終更新日: {updatedAtJPNText.join("")}</p>
        </div>
        <div className="hidden group-hover:block">
          <DestroyModal post={post} />
        </div>
      </div>
    </>
  )
}
