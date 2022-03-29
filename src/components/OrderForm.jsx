import React, {useRef, useState, useEffect} from "react";
import { itemsInCart, getTotalPrice as getTotal } from "../store/store";


const OrderForm = ({handleSubmit, handleCancel}) => {
  const [ buyer, setBuyer] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const myRef = useRef(null);

  useEffect(() => {
    myRef.current.scrollIntoView(); 
  },[]);

  function handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setBuyer({
      [name]: value});
  } 

  return (
    <div>
    <div ref={myRef} className="container px-5 py-8 mx-auto flex">
    <div className="lg:w-2/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:m-auto w-full mt-10 md:mt-0 relative z-10">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Comprar</h2>
      <p className="leading-relaxed mb-5 text-gray-600">Ingresá tus datos para finalizar el proceso de compra.</p>
      <form onSubmit={(evt)=> handleSubmit(buyer,evt)}>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Nombre y apellido</label>
        <input value={buyer.name} onChange={handleInputChange} required type="text" id="fullname" name="fullname" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">E-mail</label>
        <input value={buyer.email}onChange={handleInputChange} required type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Teléfono</label>
        <input value={buyer.phone}onChange={handleInputChange}  type="tel" id="tel" name="tel" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="container flex space-around">
        <button type="submit" className="text-white mr-2 w-1/2 bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Finalizar Compra</button>
        <button onClick={handleCancel} className="text-white w-1/2 bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Cancelar</button>
      </div>      
        <small className="text-grey-400">Al continuar estarás comprando {itemsInCart} productos, abonando un total de <strong>${getTotal().toFixed(2)}</strong>.</small>
      </form>
    </div>  
  </div>
     
    </div>
  );
};

export default OrderForm;
