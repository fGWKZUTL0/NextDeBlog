"use client"

import { postsAtom } from "@/app/atoms/postAtom";
import { createPost } from "@/app/servers/post/create";
import { updatePost } from "@/app/servers/post/update";
import { PostFormType } from "@/app/types/post";
import { Textarea, Button, Link, input } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";

type FormProps = {
  postId?: string,
  defaultValuesJSON: PostFormType | { error: string },
  formMode?: "create" | "edit"
}

export default function Form({postId, defaultValuesJSON, formMode}: FormProps){
  const router = useRouter();
  const [, setPosts] = useRecoilState(postsAtom);
  const [error, setError] = useState<string | null>(null)
  const methods = useForm<PostFormType>({
    defaultValues: {
      id: formMode === "edit" ? postId : undefined,
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

  const onCreateSubmit = handleSubmit( async (data) => {
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

  const onUpdateSubmit = handleSubmit( async (data) => {
    const postOrError = await updatePost(data)

    if("error" in postOrError){
      setError(postOrError.error)
    }else{
      formMode === "edit" && router.push("/admin")
    }
  })

  return(
    <>
      {error && <span className="text-red-600 font-bold">{error}</span>}
      <form onSubmit={
        formMode === "create" ? onCreateSubmit : onUpdateSubmit}>
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
            <Link href="/admin">
              <Button type="button" color={"primary"}>
                一覧に戻る
              </Button>
            </Link>
          }
          <Button type="submit" color={ formMode === "edit" ? "secondary" :"primary"}>
            { formMode === "edit" ? "Edit" : "Post" }
          </Button>
        </div>
      </form>
    </>
  )
}
