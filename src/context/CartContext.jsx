import React, { useContext, useEffect, useState, createContext } from "react";

const CartContext = createContext();

const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(calcTotal());
  }, [products]);

  const addItem = (item, quantity) => {
    setProducts( [...products, { ...item, quantity }]);
  };

  const clearCart = () => {
    setProducts([]);
    return [];
  };

  const isInCart = (id) => {
    //buscamos en el array "algun" (some) item con el ID buscado
    return products.some((item) => {
      return item["id"] === id;
    });
  };

  const qtyInCart = (id) => {
    let prod = products.find((item) => {
      return item["id"] === id;
    });
    return prod.quantity;
  };

  const removeFromCart = (id) => {
    let filteredCart = products.filter((item) => {
      return item["id"] !== id;
    });
    setProducts(filteredCart);
    return filteredCart;
  };

  const itemsInCart = products.length;

  function calcTotal() {
    if (products.length === 0) return null;
    let totalPrice = 0;
    console.log(products);
    if (products.length > 1) {
      totalPrice = products.reduce((a, b) => {
        return a.quantity
          ? a.quantity * a.price + b.quantity * b.price
          : a + b.quantity * b.price;
      });
    } else {
      totalPrice = products[0].price * products[0].quantity;
    }
    return totalPrice;
  }

  function getTotal() {
    return total || 0;
  }

  return (
    <CartContext.Provider
      value={{
        products,
        addItem,
        clearCart,
        isInCart,
        itemsInCart,
        removeFromCart,
        getTotal,
        qtyInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default useCartContext;
