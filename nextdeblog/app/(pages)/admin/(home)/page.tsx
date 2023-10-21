"use client"

import { createPost } from "@/app/servers/post/create"
import { PostFormType } from "@/app/types/post"
import { Button, Input, Textarea } from "@nextui-org/react"
import { useForm } from "react-hook-form"

export default function Page(){
  const methods = useForm<PostFormType>({
    defaultValues: {
      title: "",
      content: ""
    }
  })

  const onSubmit = methods.handleSubmit((data) => {
    createPost(data)
  })

  return(
    <div className="w-full md:w-1/2">
      <form onSubmit={onSubmit}>
        <Input type="text" label="Title" {...methods.register("title")} className="w-full md:w-1/2" />
        <Textarea
          {...methods.register("content", { required: true })}
          label="Content"
          labelPlacement="outside"
          placeholder="Enter your content"
          className="w-full"
        />
        <div className="py-4">
          <Button type="submit" color="primary">
            Post
          </Button>
        </div>
      </form>
    </div>
  )
} 