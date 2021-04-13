import { ADD_TO_CART, REMOVE_FROM_CART } from "../types";

const CurrentCartReducer = (state,action) => {
    switch (action.type){
        case ADD_TO_CART:
            
            return {
                ...state,
                cartItems: [...state.cartItems , action.payload ],
                total: state.total+ (action.payload.price*action.payload.quantity) 
            }
        case REMOVE_FROM_CART:
        return {
            ...state,
            cartItems: state.cartItems.filter( (item,idx)=> idx !== action.payload.id ),
            total: state.total- action.payload.amount
        }    
        default:
            return state;
    }
}

export default CurrentCartReducer
