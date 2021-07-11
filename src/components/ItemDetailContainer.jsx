import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import {getFirestore} from './../firebase';
import {useParams} from 'react-router-dom';

function ItemDetailContainer(){  
    const [item,setItem] = useState(null);    
    const {id} = useParams();

    const cliente = {
      name: 'Santiago',
      adress: 'CoderHouse 123',
      mail: 'salkinsantiago@gmail.com',            
    }

    const [isLoading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const productRef = db.collection("products2").doc(id)

        productRef.get().then((doc) => {
          if (doc.exists) {
              setItem({id,...doc.data()});
          } else {              
              setNotFound(true);
          }
          }).catch((error) => {
              setLoading(false);
              console.log("Error getting document:", error);
          }).finally(() => 
              setLoading(false)
          );
        },[]);

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-6 mx-auto">        
                <div className="flex flex-wrap sm:-m-4 -mx-8 -mb-10">
                {isLoading &&  <span>CARGANDO . . .</span> } 
                {notFound && <span>El item que buscás no está disponible.</span> } 
                {item &&                
                    <div>
                    <ItemDetail
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        imgUrl={item.image}
                        category={item.category}
                        stock={item.stock}
                    /> 
                        <div>
                        <button                
                          className="flex mx-auto mt-2 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                          ¡Comprar!
                        </button>
                      </div>
                    </div>
                }               
                </div>
            </div>
      </section>
    )  
}

export default ItemDetailContainer;