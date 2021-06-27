import React from 'react';
import logo from './logo.svg';
import './App.css';

import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  let greeting = "Bienvenido a la tienda";
  return (
    <div>
      <NavBar/> 
      <ItemListContainer title={greeting} />
    </div>
  );
}

export default App;
