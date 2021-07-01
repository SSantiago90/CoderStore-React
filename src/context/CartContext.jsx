import React, { useContext, useState, createContext } from "react";

const CartContext = createContext();

const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addItem = (item, quantity) => {
    setProducts([...products, { ...item, quantity}]);
  };

  const clearCart = () =>{
    setProducts([]);
    return true;
  }

  const isInCart = (id) =>{
    //buscamos en el array "algun" (some) item con el ID buscado
    return products.some((item) => {
        return item["id"] === id
    });
  }

  const qtyInCart = (id) =>{
        let prod = products.find( (item) =>{
            return item["id"] === id
        });
        return prod.quantity;
  }

  const removeFromCart = (id)=>{
    //devolvemos el array productos en el carrito, filtrando solo items que no tengan el ID solicitado
    let filteredCart = products.filter( (item) =>{
        return item["id"] !== id
    });
    setProducts(filteredCart);
    return filteredCart;
  }

  const itemsInCart = products.length;
  
  return (
    <CartContext.Provider value={{ products, addItem, clearCart, isInCart, itemsInCart, removeFromCart, qtyInCart }}>
      {console.table(products)}
      {children}
    </CartContext.Provider>
  );
};

export default useCartContext;
