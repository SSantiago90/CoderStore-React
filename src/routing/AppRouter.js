import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Detail from "../pages/Detail"
import Category from "../pages/Category"
import Cart from "../pages/Cart"
import NavBar from "../components/NavBar";

import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function AppRouter() {    
  let greeting = "Bienvenido a la tienda";

  return (
    <BrowserRouter>
      <NavBar />
          <Switch>
            <Route 
                exact path="/" 
                render={(props) => (
                    <Home title={greeting} />
                  )}
            />
            <Route 
                path="/about" 
                component={About} 
            />
            <Route 
                path="/products/:id"
                component={Detail}
            />
            <Route
              exact
              path="/category/:category"
              component={Category}
            />
            <Route
              path="/cart"
              component={Cart}
            />
          </Switch>
    </BrowserRouter>
  );
}