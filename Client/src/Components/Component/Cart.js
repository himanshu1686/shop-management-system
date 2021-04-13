import React , {useContext , useReducer} from 'react'
import CurrentCartContext from '../../Context/CurrentCart/CurrentCartContext';
import CartItem from '../Component/CartItem'

export const Cart = () => {
    const currentCartContext = useContext(CurrentCartContext);
    const {cartItems,grandTotal} = currentCartContext ;
    
    return (
        

        <div className="col-3 pt-3 cart "> 
            {
            
            (cartItems.length>0)? 
            <>
            <div className="row "  > 
            <div className="col"  style={{paddingLeft:"20px"}}> Name </div>
            <div className="col"> Price </div>
            <div className="col"> Quantity </div>
            <div className="col"> Total </div>  
            </div>
                {
                 cartItems.map( (cartItem , idx )=>{

                    return( <CartItem cartItem = {cartItem} id={idx} /> )
                    }) 
                }
                <hr />
                <div className="row "  > 
            <div className="col text-left">Grand Total </div>
            <div className="col text-right"> {grandTotal} </div>
            </div>
                <hr />
            </>
             : 
            <div> NOTHING IN CART </div>
            }
        </div>
    )
}
export default Cart