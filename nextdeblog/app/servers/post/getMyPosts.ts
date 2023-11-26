"use server"

import { nextAuthOptions } from "@/app/lib/auth/options"
import { getServerSession } from "next-auth"
import { findUser } from "../user/findUser"
import prisma from "@/app/lib/prisma"

export const getMyPosts = async (pageNum: number) => {
  "use server"

  const PAGE_SIZE = 5; // 1ページあたりの投稿数
  const skip = (pageNum - 1) * PAGE_SIZE; // スキップする投稿数

  const session = await getServerSession(nextAuthOptions)
  const user = await findUser(session?.user?.email)

  if (!user?.id) {
    throw new Error("ユーザーIDの取得に失敗しました");
  }

  try{
    const [posts, totalNum] = await prisma.$transaction([
      prisma.post.findMany({
        where: {
          userId: user.id,
        },
        orderBy: {
          createdAt: "desc",
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
      prisma.post.count({
        where: {
          userId: user.id,
        },
      })
    ])

    const totalPage = Math.ceil(totalNum / PAGE_SIZE);

    return [posts, totalPage]

  }catch (error) {
    throw new Error("投稿の取得に失敗しました")
  }
}
