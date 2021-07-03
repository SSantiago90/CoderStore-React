import React, { useState, useEffect} from 'react';
import CartItem from './CartItem';
import useCartContext from "../context/CartContext";


const CartContainer = () => {
    const {products} = useCartContext();
    const [cartItems , setCartItems] = useState(null);

    
    useEffect(() => {        
        if (products){
            setCartItems(products)
        }
        else {
            setCartItems([]);        
        }
    }, []);

    return (
         <section className="text-gray-600 body-font">
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl uppercase text-2xl font-large title-font mb-8 text-red-600">Carrito</h1>
                    <hr />
                </div>   
            
                <div className="flex flex-wrap sm:-m-4 -mx-8 -mb-10">
                {!cartItems && <h3>CARGANDO . . .</h3>}

                {cartItems && cartItems.length === 0 &&
                    <span className="w-2/3 text-center m-auto block py-1 px-2 rounded bg-red-50 text-red-500 text-xs font-medium tracking-widest">Tu carrito está vacío</span>             
                }
                
                {cartItems && cartItems.length !== 0 &&                  
                
                <div>
                    <table class="min-w-full table-auto">
                        <thead class="justify-between">
                        <tr class="bg-gray-800">
                            <th class="px-16 py-2">
                            <span class="text-white"></span>
                            </th>
                            <th class="px-16 py-2">
                            <span class="text-white">Producto</span>
                            </th>
                            <th class="px-16 py-2">
                            <span class="text-white">Enlace</span>
                            </th>
                            <th class="px-16 py-2">
                            <span class="text-white">Precio</span>
                            </th>

                            <th class="px-16 py-2">
                            <span class="text-white">Cantidad</span>
                            </th>

                            <th class="px-16 py-2">
                            <span class="text-white">Total</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody class="bg-gray-200">
                                       
                        {cartItems && cartItems.map( (item,index) =>
                                <CartItem          
                                    key={index}                 
                                    id={item.id}
                                    title={item.title}
                                    imgUrl={item.imgUrl}
                                    price={item.price}
                                    quantity={item.quantity}
                                />
                            )
                        }  
                        </tbody>
                    </table>
                    </div>
                }
                </div>
            </div>
      </section>
    );
}

export default CartContainer;
