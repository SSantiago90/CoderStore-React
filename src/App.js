import React from 'react';
import './App.css';
import store from "./store/store";

import { CartProvider } from "./context/CartContext";
import { Provider}  from "react-redux";

import AppRouter from './routing/AppRouter';

function App() {  
  return (       
    <Provider store={store}>
      <CartProvider>  
        <AppRouter />
      </CartProvider>
    </Provider>
  );
}

export default App;
