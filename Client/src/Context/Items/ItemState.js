import React ,  {useReducer} from 'react'
import ItemReducer from './ItemReducer'
import ItemContext from './ItemContext'
import axios from 'axios'
import { SET_ITEMS } from '../types'
const ItemState = (props)=>{
    const initState = {
       items : [
        {
            name:'Cornetto',
            company:'Kwality Walls',
            category:"Ice cream",
            price:40,
            inStock: 10 
        },
        {
            name:'Classic Salted',
            category:"Snacks",
            company:"Lays",
            price:60,
            inStock: 10 
        },
        {
            name:'Cornetto',
            company:'Kwality Walls',
            category:"Ice cream",
            price:40,
            inStock: 10 
        },
        {
            name:'Classic Salted',
            category:"Snacks",
            company:"Lays",
            price:60,
            inStock: 10 
        },
        {
            name:'Cornetto',
            company:'Kwality Walls',
            category:"Ice cream",
            price:40,
            inStock: 10 
        },
        {
            name:'Classic Salted',
            category:"Snacks",
            company:"Lays",
            price:60,
            inStock: 10 
        }
       ]
    }
    const [state,dispatch] = useReducer( ItemReducer, initState )
    const getItems = ()=>{
        const newItems = [
            
        ];
        dispatch({type:SET_ITEMS , payload:newItems })
    } 
    
    return (
    < ItemContext.Provider
        value={{
            items : state.items,
            getItems
        }} >
        {props.children}
    </ItemContext.Provider>
    );
};
export default ItemState