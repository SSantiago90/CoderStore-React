import React, {useState, useEffect} from 'react';
import Item from './Item';
import {getFirestore} from '../firebase';
import {useParams} from 'react-router-dom';

function ItemList(){
  const [items,setItems] = useState(null);    
  const [isLoading, setLoading] = useState(false)
  const {category} = useParams();
  
  useEffect(() => {    
      
      setLoading(true);
      const db = getFirestore();    
            const queryFirebase = category ? 
        db.collection("products").where("category", "==", category)
        : db.collection("products")
        .orderBy("index");

      queryFirebase.get().then( (querySnapshot ) => {
            if(querySnapshot.size === 0) {
              console.log ( 'Sin resultados' );
              setItems([]);
            }
            let documents = querySnapshot.docs.map(doc => {
              let data = doc.data();
              let id = doc.id;              
              return {id,...data};              
            }
            );
            setItems(documents);
          }).catch((error)=>{
              console.log('Error searching items', error);
          }).finally(()=>{
              setLoading(false);
          });
      },[]);
  
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-6 mx-auto">        
                <div className="flex flex-wrap sm:-m-4 -mx-8 -mb-10">
                { isLoading && <h3>CARGANDO . . .</h3>}
                { items && items.length === 0 &&
                  <div><span><p>SIN RESULTADOS</p></span></div>
                }
             
                { items && items.map( (itm,index) =>                
                        <Item 
                            
                            key={index}
                            id={itm.id}
                            title={itm.title}
                            price={itm.price}
                            imgUrl={itm.image}
                        />
                    )}  
                </div>
            </div>
      </section>
    )  
}

export default ItemList;