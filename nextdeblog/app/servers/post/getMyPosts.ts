"use server"

import { nextAuthOptions } from "@/app/lib/auth/options"
import { getServerSession } from "next-auth"
import { findUser } from "../user/findUser"
import prisma from "@/app/lib/prisma"

export const getMyPosts = async () => {
  "use server"

  const session = await getServerSession(nextAuthOptions)

  const user = await findUser(session?.user?.email)

  if (!user?.id) {
    throw new Error("ユーザーIDの取得に失敗しました");
  }

  try{
    const posts = await prisma.post.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        user: true,
      },
    })

    return posts

  }catch (error) {
    return { error: "投稿の取得に失敗しました" }
  }
}