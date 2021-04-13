import React, { useState,useContext } from 'react'
import ItemContext from '../../Context/Items/ItemContext'
import  Cart  from '../Component/Cart'
import Item from '../Component/Item'
const Home = () => {
    const [searchText, setSearchText ] = useState('')
    const itemContext = useContext(ItemContext)
    const {items} = itemContext;
    const handleChange = (e)=>{
        setSearchText(e.target.value)
    }
    return (
        <>
        <div className="row ">
        <div className="col-9 py-1 item-col">
            <div className="row justify-content-center" > 
            <div className="col-11 search-bar" >
            <input
             type="text" 
             className = "form-control" 
             placeholder="Enter your Query Here..."
             value={searchText}
             name = "searchText"
             onChange={handleChange}
             />       
             </div>
             <div className="col-11 mb-5" ></div>
             {items.map( (item)=>{ 
                 return (<Item item={item} /> )
             } )}
             
        </div>
        </div>
        <Cart />
        </div>
        
        </>
    )
}

export default Home
