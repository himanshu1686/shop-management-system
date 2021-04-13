import React from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import CurrentCartState from './Context/CurrentCart/CurrentCartState';
import ItemState from './Context/Items/ItemState'

ReactDOM.render(
  <CurrentCartState >
  <ItemState>
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </ItemState>
  </CurrentCartState>
  ,
  document.getElementById('root')
);


