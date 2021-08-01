import React from 'react';
import './App.css';
import Modal from './components/Modal';

import { CartProvider } from "./context/CartContext";


import AppRouter from './routing/AppRouter';

function App() {  
  return (       
    <CartProvider>  
      <AppRouter />
    </CartProvider>
  );
}

export default App;
