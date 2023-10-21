"use client"

import { postsAtom } from "@/app/atoms/postAtom"
import Posts from "@/app/components/admin/post/Posts"
import { createPost } from "@/app/servers/post/create"
import { PostFormType } from "@/app/types/post"
import { Button, Input, Textarea } from "@nextui-org/react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useRecoilState } from "recoil"

export default function Page(){
  const [, setPosts] = useRecoilState(postsAtom);
  const [error, setError] = useState<string | null>(null)
  const methods = useForm<PostFormType>({
    defaultValues: {
      title: "",
      content: ""
    }
  })

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmit = handleSubmit( async (data) => {
    const postOrError = await createPost(data)

    if("error" in postOrError){
      setError(postOrError.error)
    }else{
      methods.reset({
        title: "",
        content: ""
      })

      setPosts((prev) => [postOrError, ...prev])
    }
  })

  return(
    <div className="w-full md:w-1/2">
      {error && <span className="text-red-600 font-bold">{error}</span>}
      <form onSubmit={onSubmit}>
        <Input type="text" label="Title" {...register("title", { required: "titleは必須項目です" })} className="w-full md:w-1/2" />
        { errors.title && <span className="text-red-600">{errors.title.message}</span> }
        <Textarea
          {...register("content", { required: "contentは必須項目です" })}
          label="Content"
          labelPlacement="outside"
          placeholder="Enter your content"
          className="w-full"
        />
        { errors.content && <span className="text-red-600">{errors.content.message}</span> }
        <div className="py-4">
          <Button type="submit" color="primary">
            Post
          </Button>
        </div>
      </form>

      <Posts />
    </div>
  )
} 