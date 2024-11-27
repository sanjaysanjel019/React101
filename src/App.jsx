import { useState } from "react";
const App = () => {
  const [counter, setCounter] = useState(0);
  // setCounter(counter+1);
  const increment = () => {
    setCounter(counter+1);
  }
 return(
<section>
  <h1>{counter}</h1>
  <button onClick={increment}>Increment</button>
</section> 
)

}


export default App;