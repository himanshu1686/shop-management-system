import React from 'react'
import {Switch,Route } from 'react-router-dom' 
import Home from '../Page/Home'

const Main = () => {
    return (
        <div className="container bg-light  main"> 
           <Switch>
          <Route path='/'
            // render = {()=>{ </>} }
            component ={Home} 
             />  

        </Switch> 
        </div>
    )
}

export default Main
