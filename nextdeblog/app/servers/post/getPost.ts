"use server"

import prisma from "@/app/lib/prisma"

export const getPost = async (id: string | undefined) => {
  "use server"

  const post = await prisma.post.findUnique({
    where: {
      id: id,
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

  if(post === null){
    throw new Error("投稿が見つかりませんでした")
  }

  return post
} 
