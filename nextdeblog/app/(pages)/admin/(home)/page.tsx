import Posts from "@/app/components/admin/post/Posts"
import Form from "../(form)/Form"

export default function Page(){
  const defaultValuesJSON = {
    defaultValues: {
      title: "",
      content: ""
    }
  }

  return(
    <div className="w-full md:w-1/2">
      <Form defaultValuesJSON={defaultValuesJSON.defaultValues} />
      <Posts />
    </div>
  )
} 