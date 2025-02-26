import { useEffect,useState } from "react";

const FetchingData = () => {
    const[data,setDate]=useState([]);

    useEffect(()=>{
        async function getData() {
            const res = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await res.json();

            if(data && data.length){
                setDate(data)
            }
        }

        getData();
    },[])
  return (
    <div>
        <ul>
            {data.map(todo=>(
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default FetchingData