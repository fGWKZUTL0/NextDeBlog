"use client";

import Post from "./Post";
import { Post as PostProp } from "@prisma/client";
import { UserType } from "@/app/types/user";

interface PostsProps {
  postsOrError: Array<PostProp & {user: UserType}> | { error: string; }
}

export default function Posts({postsOrError}: PostsProps) {

  return (
    <>
      {
        "error" in postsOrError 
      ? 
        <span className="text-red-600 font-bold">
          {postsOrError.error}
        </span>
      : 
        postsOrError.map((post) => (
          <Post key={post.id} post={post} />
        ))
      }
    </> 
  );
}
