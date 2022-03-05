import { getFirestore } from "../firebase";

import React, { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom';
import useCartContext from "../context/CartContext";
import CartItem from "./CartItem";
import OrderForm from "./OrderForm";
import Modal from "./Modal";

const CartContainer = () => {
  const { products, removeFromCart, clearCart, getTotal } = useCartContext();
  const [cartItems, setCartItems] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [submiting, setSubmiting] = useState(false);
  const navigation = useHistory();

  function createOrder(buyer, evt) {
    evt.preventDefault();
    setSubmiting(true);
    setShowForm(false);
    let db = getFirestore();
    let ISOdate = new Date().toISOString();
    let total = getTotal();

    //map items from firebase
    let itemlist = [];
    products.forEach((item) => {
      itemlist.push({
        id: item.id,
        titel: item.title,
        price: item.price,
        quantity: item.quantity,
      });
    });

    db.collection("orders")
      .add({
        buyer: buyer,
        items: itemlist,
        date: ISOdate,
        total: total,
      })
      .then((docRef) => {
        clearCart();
        navigation.push({
          pathname: '/checkout', 
          state: {'id': docRef.id} 
        });
      })
      .catch((error) => {
        navigation.push({
          pathname: '/checkout', 
          errorMsg: error
        });
        
      })
      .finally(() => {
        setSubmiting(false);
      });
  }

  function onDelete(id) {
    setCartItems(removeFromCart(id));
  }

  function cancelForm() {
    setShowForm(false);
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
          <h1 className="sm:text-3xl uppercase text-2xl font-large title-font mb-8 text-indigo-600">
            Carrito
          </h1>
          <hr />
        </div>

        <div className="flex flex-wrap sm:-m-4 -mx-8 -mb-10">
          {!cartItems && !submiting && <h3>CARGANDO . . .</h3>}

          {cartItems && cartItems.length === 0 && (
            <span className="w-2/3 text-center m-auto block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
              Tu carrito está vacío
            </span>
          )}

          {submiting && <h3>ENVIANDO . . .</h3>}

          {cartItems && cartItems.length !== 0 && !submiting && (
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
                  <tr className="bg-indigo-600 text-white">
                    <td
                      className="px-8 py-3 text-right ml-2 font-bold"
                      colSpan="4"
                    >
                      Total
                    </td>
                    <td
                      className="px-8 py-3 text-left ml-2 font-bold"
                      colSpan="2"
                    >
                      $ {getTotal().toFixed(2)}
                    </td>
                  </tr>
                </tfoot>
              </table>
              {!showForm ? (
                <div className="mt-8">
                  <button
                    onClick={() => setShowForm(true)}
                    className="flex mx-auto mt-2 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
                  >
                    Comprar
                  </button>
                </div>
              ) : (
                <Modal open={showForm} handleClose={cancelForm}>
                  <OrderForm
                    handleSubmit={createOrder}
                    handleCancel={cancelForm}
                  />
                </Modal>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CartContainer;
