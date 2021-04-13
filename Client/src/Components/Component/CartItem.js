import React , {useContext,useReducer} from 'react'
import CurrentCartContext from '../../Context/CurrentCart/CurrentCartContext'
const CartItem = ({cartItem,id}) => {
    const currentCartContext = useContext(CurrentCartContext);
    const {removeFromCart} = currentCartContext ;
    const handleRemove = ( obj ) => {
    removeFromCart (obj);
    }
    return (
        <div className="row cart-item" key={id}  > 
                <div className="col" style={{paddingLeft:"20px"}}> {cartItem.name} </div>
                <div className="col text-right"> {cartItem.price} </div>
                <div className="col text-right"> {cartItem.quantity} </div>
                <div className="col text-right"> {cartItem.price * cartItem.quantity } </div> 
                <button className="remove btn btn-danger  btn-sm " onClick= { ()=>{ handleRemove({id , amount: cartItem.price*cartItem.quantity}) }  }> {'<'}  </button>  
        </div>
    )
}

export default CartItem
