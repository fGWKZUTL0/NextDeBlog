"use client"

import { postsAtom } from "@/app/atoms/postAtom";
import { createPost } from "@/app/servers/post/create";
import { PostFormType } from "@/app/types/post";
import { Textarea, Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";

type FormProps = {
  defaultValuesJSON: PostFormType | { error: string },
  formMode?: "create" | "edit"
}

export default function Form({defaultValuesJSON, formMode}: FormProps){
  const [, setPosts] = useRecoilState(postsAtom);
  const [error, setError] = useState<string | null>(null)
  const methods = useForm<PostFormType>({
    defaultValues: {
      title: "",
      content: ""
    }
  })

  // サーバーサイドコンポーネントでdefaultValuesJSONを設定すると、formType="create"の時にeditのdefaultValuesが反映されてしまうので、useEffectで対応
  useEffect(() => {
    if("error" in defaultValuesJSON){
      setError(defaultValuesJSON.error)
    }else{
      methods.reset({
        title: defaultValuesJSON.title,
        content: defaultValuesJSON.content
      })
    }
  }, [defaultValuesJSON])

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
        <div className="py-4">
          <Button type="submit" color={ formMode === "edit" ? "secondary" :"primary"}>
            { formMode === "edit" ? "Edit" : "Post" }
          </Button>
        </div>
      </form>
    </>
  )
}