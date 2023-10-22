"use server"

import prisma from "@/app/lib/prisma"

export const getPublicPosts = async () => {
  "use server"

  try{
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            image: true,
          }
        }
      },
    })

    return posts

  }catch (error) {
    return { error: "投稿の取得に失敗しました" }
  }
}
