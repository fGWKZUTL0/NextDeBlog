"use client"

import { postsAtom } from "@/app/atoms/postAtom";
import { createPost } from "@/app/servers/post/create";
import { updatePost } from "@/app/servers/post/update";
import { PostFormType } from "@/app/types/post";
import { Textarea, Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";

type FormProps = {
  defaultValuesJSON: PostFormType,
  formMode?: "create" | "edit"
}

export default function Form({defaultValuesJSON, formMode}: FormProps){
  const router = useRouter();
  const [error, setError] = useState<string | null>(null)
  const methods = useForm<PostFormType>({
    defaultValues: defaultValuesJSON
  })

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onCreateSubmit = handleSubmit( async (data) => {
    const postOrError = await createPost(data)

    if("error" in postOrError){
      setError(postOrError.error)
      return
    }

    router.refresh()

    methods.reset({
      title: "",
      content: ""
    })
  })

  const onUpdateSubmit = handleSubmit( async (data) => {
    const postOrError = await updatePost(data)

    if("error" in postOrError){
      setError(postOrError.error)
      return
    }
      
    router.refresh()
    router.push("/admin")
  })

  return(
    <>
      {error && <span className="text-red-600 font-bold">{error}</span>}
      <form onSubmit={
        formMode === "create" ? onCreateSubmit : onUpdateSubmit
      }>
        { formMode === "edit" && <input type="hidden" {...register("id")} /> }
        <div className="mb-2 md:w-1/2">
          <Input
            type="text"
            label="Title"
            key="outside"
            labelPlacement="outside"
            placeholder="Enter your title"
            {...register("title", { required: "titleは必須項目です" })}
            className="w-full"
            isRequired
          />
          { errors.title && <span className="text-red-600">{errors.title.message}</span> }
        </div>
        <div className="">
          <Textarea
            {...register("content", { required: "contentは必須項目です" })}
            label="Content"
            labelPlacement="outside"
            placeholder="Enter your content"
            className="w-full"
            isRequired
          />
          { errors.content && <span className="text-red-600">{errors.content.message}</span> }
        </div>
        <div className="flex gap-x-2 py-4">
          { formMode === "edit" &&
            <Button
              // href属性だと普通にリダイレクトされてしまうので、onClickでrouter.pushを使う
              onClick={() =>{
                router.back()
              }}
              color={"primary"}>
                一覧に戻る
            </Button>
          }
          <Button type="submit" color="secondary">
            { formMode === "edit" ? "Edit" : "Post" }
          </Button>
        </div>
      </form>
    </>
  )
}
