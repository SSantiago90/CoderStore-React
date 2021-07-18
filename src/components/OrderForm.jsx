import React from "react";
import { getFirestore } from "../firebase";
import useCartContext from "../context/CartContext";

const OrderForm = () => {
  const { products, getTotal } = useCartContext();

  function handleSubmit() {    
    const buyer = {
      name: "Santiago",
      email: "salkin.santiago@gmail.com",
      phone: 123,
    };
    let itemlist = [];

    products.forEach( (item)=>{
      itemlist.push(
        {id: item.id,
         titel: item.title,
         price: item.price,
         quantity: item.quantity}
      );
    });

    createOrder(buyer, itemlist, getTotal());
  }

  function createOrder(buyer, items, total) {
    let db = getFirestore();
    let ISOdate = new Date().toISOString();

    db.collection("orders")
      .add({
        buyer: buyer,
        items: items,
        date: ISOdate,
        total: total,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  return (
    <div>
      <p>Form</p>
      <button onClick={handleSubmit}>Compra</button>
    </div>
  );
};

export default OrderForm;
