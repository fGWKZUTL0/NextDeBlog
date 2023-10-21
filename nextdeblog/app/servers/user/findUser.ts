"use server"

import prisma from "@/app/lib/prisma";

export const findUser = async (email: string | null | undefined) => {
  "use server"
  
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