import { useState } from "react"

const ToDoList = () => {
    //Functions
    const [toDoList,setToDoList] = useState([
        {
            id:1,
            title : "Clean the Kitchen"
        },
        {
            id:2,
            title : "Write the mail"
        }
    ])
    const [inputValue, setInputValue] = useState("");

   
    const handleInputChange = (e) => {
        console.log(e.target.value)
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        console.log("Handing the form input")
        e.preventDefault();

        if(inputValue.trim()=== '') return;

        const newToDo = {
            id: toDoList.length + 1, // You could improve this logic with a better id system (like UUID)
            title: inputValue,
          };
      

        setToDoList([...toDoList,newToDo])
        setInputValue('');
    }

// DIV <-- HTML -->
  return (
    <div>
        <ul>
            {toDoList.map((m)=>(
                <li key={m.id}>
                    {m.title}
                </li>
                
            ))}

        </ul>
        <form onSubmit={handleSubmit}>
            
            <input type="text" value={inputValue}
            onChange={handleInputChange}
            placeholder="Add your todo item"
            
            ></input>
            <button type="submit">Add New Items</button>
        </form>
       
    </div>
  )
}

export default ToDoList