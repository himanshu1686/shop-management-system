import React , {useReducer} from 'react'
import { ADD_TO_CART, REMOVE_FROM_CART } from '../types';
import CurrentCartContext from './CurrentCartContext';
import CurrentCartReducer from './CurrentCartReducer'

const CurrentCartState = (props) => {
    const initState = {
        cartItems:[],
        total:0
    }
   const [state,dispatch] =  useReducer(CurrentCartReducer,initState );
   const addToCart = (item)=>{ 
    dispatch({type:ADD_TO_CART,payload:item})
  }
  const removeFromCart = ( payload )=>{
    dispatch({type:REMOVE_FROM_CART , payload:payload })
  } 
   return (
       <CurrentCartContext.Provider 
       value = {{
           
        cartItems:state.cartItems,
        grandTotal : state.total,
        removeFromCart,
        addToCart
       }}
       >
           {props.children}
       </CurrentCartContext.Provider> 
    )
}

export default CurrentCartState
