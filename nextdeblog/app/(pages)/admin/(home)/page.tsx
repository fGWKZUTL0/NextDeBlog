import Posts from "@/app/components/admin/post/Posts"
import Form from "../(form)/Form"

export const defaultValuesJSON = {
  defaultValues: {
    title: "",
    content: ""
  }
}

export default function Page(){
  return(
    <div className="w-full md:w-1/2">
      <Form defaultValuesJSON={defaultValuesJSON} />
      <Posts />
    </div>
  )
} 