"use client"

import { Button, Input, Textarea } from "@nextui-org/react"
import { useForm } from "react-hook-form"

type PostFormType = {
  title: string,
  content: string
}

export default function Page(){
  const methods = useForm<PostFormType>({
    defaultValues: {
      title: "",
      content: ""
    }
  })

  return(
    <div className="w-full md:w-1/2">
      <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
        <Input type="text" label="Title" {...methods.register('title')} className="w-full md:w-1/2" />
        <Textarea
          {...methods.register('content', { required: true })}
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