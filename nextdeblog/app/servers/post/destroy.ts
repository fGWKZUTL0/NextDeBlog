"use server"
import { nextAuthOptions } from "@/app/lib/auth/options";
import prisma from "@/app/lib/prisma";
import { getServerSession } from "next-auth";
import { findUser } from "../user/findUser";

export const destroyPost = async (postId: string | undefined) => {
  "use server"

  const session = await getServerSession(nextAuthOptions)

  const user = await findUser(session?.user?.email)

  if (!user?.id) {
    throw new Error("ユーザーIDの取得に失敗しました");
  }

  try{
    const post = await prisma.post.delete({ 
      where: { id: postId }
    })
  
    return post
  }catch (error) {
    return { error: "投稿の削除に失敗しました" }
  }
}
