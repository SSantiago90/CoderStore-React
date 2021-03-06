import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { getFirestore } from "./../firebase";
import { useParams, useHistory } from "react-router-dom";
import ItemDetailLoader from "./loaders/ItemDetailLoader";

import { addToCart } from "../store/store";
import { useSelector } from "react-redux";

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  let history = useHistory();

  const db = getFirestore();
  const cartstate = useSelector((state) => state);

  useEffect(() => {
    
    setLoading(true);
    // Firestore
    const productRef = db.collection("products").doc(id);   
    productRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          setItem({ id, ...doc.data() });
        } else {
          setNotFound(true);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log("Error getting document:", error);
      })
      .finally(() => {            
        setLoading(false);       
      });      

      //Redux check item
  }, []);
  
  function goNext(sign) {
    const next = parseInt(item.index + sign, 10);

    db.collection("products")
      .where("index", "==", next)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          history.push(`/products/${doc.id}`);
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log("Error getting document:", error);
      });      
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-6 mx-auto">
        <div className="flex flex-wrap sm:-m-4 -mx-8 -mb-10">
          {isLoading && <ItemDetailLoader />}
          {notFound && <span>El item que buscás no está disponible.</span>}
          {item && (
            <div>
              <ItemDetail
                id={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                imgUrl={item.image}
                category={item.category}
                stock={item.stock}
                goNext={goNext}
                onAdd={addToCart}
              />
              <div></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ItemDetailContainer;
