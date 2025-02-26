import { useEffect } from "react"

const BasicEffect = () => {

    useEffect(()=>{
        console.log("Hello World, I am here");
    })
  return (
    <div>BasicEffect</div>
  )
}

export default BasicEffect