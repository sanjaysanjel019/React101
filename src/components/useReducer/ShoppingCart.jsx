import {React,useReducer} from 'react'

// First let's defind our initial state - could be anything

const initialState = {
    items:[],
    total:0,
    loading:false,
    error:null
}
function cartReducer(state,action){
    switch(action.type){
        case 'ADD_ITEM':
            { const newItems = [...state.items,action.payload];
            return {
                ...state,
                items:newItems,
                total:newItems.reduce((sum,item)=>sum+item.price,0)
            }; }
        case 'REMOVE_ITEM':
            { const filteredItems = state.items.filter(item=>item.id!==action.payload);
            return {
                ...state,
                items:filteredItems,
                total:filteredItems.reduce((sum,item)=>sum+item.price,0)
            } }
        case 'CLEAR_CART':
            return {
                ...state,
                items: [],
                total: 0
                };
        default:
            return state;
    }
}


export const ShoppingCart = () => {
    const[cart,dispatch] = useReducer(cartReducer,initialState);

    const addItem = (item) =>{
        dispatch({type:'ADD_ITEM',payload:item})
    }

    const removeItem = (item) =>{
        dispatch({type:'REMOVE_ITEM',payload:item})
    }

    const checkout = async () => {
        dispatch({ type: 'CHECKOUT_START' });
        
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          dispatch({ type: 'CHECKOUT_SUCCESS' });
        } catch (error) {
          dispatch({ type: 'CHECKOUT_FAILURE', payload: error.message });
        }
      };
      


  return (
    <div>
        <h2>Your cart items</h2>

        <ul>
        {cart.items.map(item   => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <button onClick={()=> addItem({id:Date.now(),name:"Child Pants",price:9.99})}>Add Sample Item</button>
      <br/>
      <br/>
      
      
      <button onClick={()=>dispatch({type:'CLEAR_CART'})}>Clear Cart</button>
      <br/>
      <br/>
      

      <button 
        onClick={checkout} 
        disabled={cart.items.length === 0 || cart.loading}
      >
        {cart.loading ? 'Processing...' : 'Checkout'}
      </button>


    </div>
  )
}
