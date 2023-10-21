"use server"
import { nextAuthOptions } from "@/app/lib/auth/options";
import prisma from "@/app/lib/prisma";
import { PostFormType } from "@/app/types/post";
import { Prisma } from "@prisma/client";
import { getServerSession } from "next-auth";
import { findUser } from "../user/findUser";

export const createPost = async (data: PostFormType) => {
  "use server"

  const session = await getServerSession(nextAuthOptions)

  const user = await findUser(session?.user?.email)

  if (!user?.id) {
    throw new Error("ユーザーIDの取得に失敗しました");
  }

  try{
    const post = await prisma.post.create({ data: {
      title: data.title,
      content: data.content,
      user: {
        connect: {
          id: user.id,
        },
      },
    } as Prisma.PostCreateInput })
  
    return post
  }catch (error) {
    return { error: "投稿に失敗しました" }
  }
}
