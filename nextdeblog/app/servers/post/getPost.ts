"use server"

import prisma from "@/app/lib/prisma"

export const getPost = async (id: string) => {
  "use server"

  try{
    const post = await prisma.post.findUnique({
      where: {
        id: id,
      },
      include: {
        user: true,
      },
    })

    if(post === null){
      throw new Error("投稿が見つかりませんでした")
    }

    return post

  }catch (error) {
    return { error: "投稿の取得に失敗しました" }
  }
} 