
import { useState,useEffect } from "react";
const App = () => {
  const [value,setValue]= useState(0);

// We can do anything here...
  useEffect(()=>{
    console.log("Hello Use Effect")
    document.title= `Increment ${value}`
  });
 return(
<section>
  <h1>Hello</h1>
  <h2>{value}</h2>

  <button onClick={()=>setValue(value+1)}>Click Me</button>

</section> 
)

}


export default App;