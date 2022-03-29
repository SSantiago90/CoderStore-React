import React from 'react';
import './App.css';
import store from "./store/store";
import { Provider }  from "react-redux";

import AppRouter from './routing/AppRouter';

function App() {  
  return (       
    <Provider store={store}>
        <AppRouter />
    </Provider>
  );
}

export default App;
