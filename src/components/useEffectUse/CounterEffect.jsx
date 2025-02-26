import { useEffect, useState } from "react"

const CounterEffect = () => {

    const [count,setCount]= useState(0);

    const handleClick = () => {
        setCount(count+1);
    }

    useEffect(()=>{
        document.title=count;
    },[count]);

  return (
    <div>
        <p>Counter : {count} </p>
        <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default CounterEffect