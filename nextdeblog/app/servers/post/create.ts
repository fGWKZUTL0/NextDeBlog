"use server"
import { nextAuthOptions } from "@/app/lib/auth/options";
import prisma from "@/app/lib/prisma";
import { PostFormType } from "@/app/types/post";
import { Prisma } from "@prisma/client";
import { getServerSession } from "next-auth";

export const createPost = async (data: PostFormType) => {
  "use server"

  const session = await getServerSession(nextAuthOptions)

  const user = await findUser(session?.user?.email)

  if (!user?.id) {
    throw new Error("ユーザーIDの取得に失敗しました");
  }

  await prisma.post.create({ data: {
    title: data.title,
    content: data.content,
    user: {
      connect: {
        id: user.id,
      },
    },
  } as Prisma.PostCreateInput })
}

// ユーザーを取得する関数
const findUser = async (email: string | null | undefined) => {
  try {
    if(email === null || email === undefined){
      throw new Error("セッションからメールアドレスを取得することができませんでした")
    } 

    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    if(user){
      return user
    }

    throw new Error("ユーザーが見つかりませんでした")
  } catch (error) {
    console.error("ユーザーIDの取得に失敗しました:", error);
    throw error;
  }
}