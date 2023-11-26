"use client"

import { postsAtom } from "@/app/atoms/postAtom";
import { destroyPost } from "@/app/servers/post/destroy";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { Post } from "@prisma/client";
import { useState } from "react";
import { useRecoilState } from "recoil";

type DestroyModalProps = {
  post: Post
}

export default function DestroyModal({post}: DestroyModalProps){
  const [posts, setPosts] = useRecoilState(postsAtom);
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const {isOpen, onOpen, onClose} = useDisclosure();
  
  const handleDestroy = async () => {
    if(isLoading) return

    setIsLoading(true)
    const deletedPost = await destroyPost(post.id)

    if("error" in deletedPost){
      alert(deletedPost.error)
    }else{
      setPosts(posts.filter((post) => post.id !== deletedPost.id))
    }

    setIsLoading(false)
    onClose()
  }

  return(
    <>
      <div className="w-fit h-full bg-orange-700 rounded-full" onClick={() =>{ 
        onOpen()
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <Modal 
        size={"sm"} 
        isOpen={isOpen}
        placement="center"
        onClose={onClose} 
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                注意
              </ModalHeader>
              <ModalBody>
                <p className="font-bold truncate">
                  {post.title}
                </p>
                <p className="line-clamp-2">
                  {post.content}
                </p>
                <p className="mt-4">
                  この投稿を削除してもよろしいですか？
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" variant="light" onPress={onClose}>
                  閉じる
                </Button>
                <Button color="danger" onClick={() => handleDestroy()}>
                  削除{isLoading && "中"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
