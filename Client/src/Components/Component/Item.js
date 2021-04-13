import React , {useState,useContext} from 'react'
import CurrentCartContext from '../../Context/CurrentCart/CurrentCartContext'

const Item = ({item}) => {
    const [quantity, setquantity] = useState(0)
    const [clickable,setclickable]= useState(false)
    const currentCartContext  = useContext(CurrentCartContext)
    const { addToCart } = currentCartContext;
    const handleChange = (e)=>{
    setquantity(e.target.value)
    if( e.target.value<=item.inStock  && e.target.value>0 ){
        setclickable(true)
    } else{
        setclickable(false)
    }
   }
   const handleAddToCart = (e)=>{
       e.preventDefault();
        const newItem = item ;
        newItem.quantity = quantity;
        addToCart(newItem);
   }
    return (
        <div className="col-11 my-2 item"> 
               <h1 className="title" > {item.name} </h1>
               <h2 className="subtitle" >{item.company}</h2>
                <div className ="row justify-content-end" >
                    <div class="col-3"> <label>Price:</label> {item.price} </div>
                    <div class="col-3"><lablel> In Stock: </lablel> {item.inStock} </div>
                    <div class="col-3">  <input type="number" className="w-100"  name="quantity" value={quantity} onChange={handleChange} /> </div>
                    <div class="col-3"> <label> Total: {item.price*quantity} </label> </div>
                    
                </div>
                
                 
                <button className="addToList btn btn-sm btn-success"  disabled={(clickable)?"":"disabled"}  onClick ={handleAddToCart} > {'->'} </button>
        </div>
    )
}

export default Item
