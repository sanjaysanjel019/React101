import { useState } from "react"

const Counter = () => {
    const [count,setCount] = useState(0);

    const handleCount = () => {
        setCount(count+1);
    }
  return (
    <div>
        <div>
            <h2>{count}</h2>
            <button onClick={handleCount}>Increment</button>
        </div>
    </div>
  )
}

export default Counter