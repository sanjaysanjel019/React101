import { useReducer } from "react";
import { ShoppingCart } from "./components/useReducer/ShoppingCart";


const initialState = {count:0};

const reducer = (state,action)=>{
  switch(action.type)
  {
    case 'increment':
      return {...state,count:state.count+1};
      

    case 'decrement':
      return {...state,count:state.count-1};
      
    case 'reset':
      return {...state,count:0};

    default:
      return state;

}
}

const App = () => {
  const [state,dispatch]=useReducer(reducer,initialState);
  

 return(
<section>
  {/* <h1>Count : {state.count}</h1>
  <button onClick={()=>dispatch({type:"increment"})}>Increase my ass</button>
  <br/>
  <br/>
  <button onClick={()=>dispatch({type:"decrement"})}>Decrease my ass</button>
  <br/>
  <br/>
  <button onClick={()=>dispatch({type:"reset"})}>Reset my ass</button> */}

<ShoppingCart></ShoppingCart>
</section> 
)

}


export default App;