import { Progress } from "@nextui-org/react";

export default function Loading(){
  return(
    <div className="w-full h-screen flex justify-center items-center">
      <Progress
        size="sm"
        isIndeterminate
        aria-label="Loading..."
        className="max-w-md"
      />
    </div>
  )
}
