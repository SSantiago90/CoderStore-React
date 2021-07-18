import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import useCartContext from "../context/CartContext";
import OrderForm from "./OrderForm";

const CartContainer = () => {
  const { products, removeFromCart, getTotal} = useCartContext();
  const [cartItems, setCartItems] = useState(null);

  function onDelete(id) {
    setCartItems(removeFromCart(id));
  }

  useEffect(() => {
    if (products) {
      setCartItems(products);
    } else {
      setCartItems([]);
    }
  }, [products]);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl uppercase text-2xl font-large title-font mb-8 text-red-600">
            Carrito
          </h1>
          <hr />
        </div>

        <div className="flex flex-wrap sm:-m-4 -mx-8 -mb-10">
          {!cartItems && <h3>CARGANDO . . .</h3>}

          {cartItems && cartItems.length === 0 && (
            <span className="w-2/3 text-center m-auto block py-1 px-2 rounded bg-red-50 text-red-500 text-xs font-medium tracking-widest">
              Tu carrito está vacío
            </span>
          )}

          {cartItems && cartItems.length !== 0 && (
            <div className="m-auto">
              <table className="min-w-full table-auto">
                <thead className="justify-between">
                  <tr className="bg-gray-800">
                    <th className="px-8 py-2">
                      <span className="text-white"></span>
                    </th>
                    <th className="px-20 py-2">
                      <span className="text-white">Producto</span>
                    </th>
                    <th className="px-10 py-2">
                      <span className="text-white">Precio</span>
                    </th>

                    <th className="px-6 py-2">
                      <span className="text-white">Cantidad</span>
                    </th>

                    <th className="px-8 py-2">
                      <span className="text-white">Total</span>
                    </th>
                    <th className="px-8 py-2">
                      <span className="text-white">Acciones</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-gray-200">
                  {cartItems &&
                    cartItems.map((item, index) => (
                      <CartItem
                        key={index}
                        id={item.id}
                        title={item.title}
                        imgUrl={item.imgUrl}
                        price={item.price}
                        quantity={item.quantity}
                        onDelete={onDelete}
                      />
                    ))}
                </tbody>
                <tfoot className="justify-between">
                    <tr className="bg-red-600 text-white">
                    <td className="px-8 py-3 text-right ml-2 font-bold" colspan="4">Total</td>
                    <td className="px-8 py-3 text-left ml-2 font-bold" colspan="2">$ {getTotal().toFixed(2)}</td>
                  </tr>
                </tfoot>
              </table>
              <div className="mt-8">
                <button className="flex mx-auto mt-2 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Comprar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <OrderForm />
    </section>
  );
};

export default CartContainer;
