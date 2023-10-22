import { UserType } from "@/app/types/user";
import { User } from "@nextui-org/react";
import { Post } from "@prisma/client";
import Link from "next/link";
import React from "react";

export type RichPostProps = {
  post: Post & {
    user: UserType
  }
}

export default function RichPost({post}: RichPostProps){
  const updatedAtJPNText = [
    `${post.updatedAt.getFullYear()}年`,
    `${post.updatedAt.getMonth() + 1}月`,
    `${post.updatedAt.getDate()}日`,
  ]
  
  return(
    <>
      <div className="flex justify-center py-4">
        <h1 className="text-xl font-bold">{post.title}</h1>
      </div>
      <div className="md:flex md:justify-center px-12 mb-20">
        <p className="whitespace-pre-wrap">
          {post.content.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
      <div className="flex justify-center md:justify-end items-center md:px-12 mt-4">
        <div>
          <User
            name={post?.user?.name}
            avatarProps={{
              src: post?.user?.image || ""
            }}
          />
          {
            post.createdAt === post.updatedAt ?
              <p className="text-gray-600">投稿日: {updatedAtJPNText.join("")}</p>
            :
              <p className="text-gray-600">更新日: {updatedAtJPNText.join("")}</p>
          }
          <div className="mt-2">
            <Link href="/" className="text-blue-600">投稿一覧に戻る</Link>
          </div>
        </div>
      </div>
    </>
  )
}
