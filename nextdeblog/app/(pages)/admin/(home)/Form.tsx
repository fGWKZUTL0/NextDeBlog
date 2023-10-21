"use client"

import { postsAtom } from "@/app/atoms/postAtom";
import { createPost } from "@/app/servers/post/create";
import { PostFormType } from "@/app/types/post";
import { Textarea, Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";

type FormProps = {
  defaultValuesJSON: {
    defaultValues: PostFormType
  }
}

export default function Form({defaultValuesJSON}: FormProps){
  const [, setPosts] = useRecoilState(postsAtom);
  const [error, setError] = useState<string | null>(null)
  const methods = useForm<PostFormType>(defaultValuesJSON)

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
    <>
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
    </>
  )
}