"use server"

import prisma from "@/app/lib/prisma"

export const getPublicPosts = async (pageNum: number) => {
  "use server"

  const PAGE_SIZE = 5; // 1ページあたりの投稿数
  const skip = (pageNum - 1) * PAGE_SIZE; // スキップする投稿数

  try{
    const [posts, totalNum] = await prisma.$transaction([
      prisma.post.findMany({
        orderBy: {
          updatedAt: "desc",
        },
        skip: skip,
        take: PAGE_SIZE,
        include: {
          user: {
            select: {
              id: true,
              name: true,
              image: true,
            }
          }
        },
      }),
      prisma.post.count()
    ])

    const totalPage = Math.ceil(totalNum / PAGE_SIZE);

    return [posts, totalPage]

  }catch (error) {
    return { error: "投稿の取得に失敗しました" }
  }
}
