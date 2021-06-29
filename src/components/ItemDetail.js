import React, {useState} from 'react';
import ItemCount from "./ItemCount";
import { Link, useHistory } from "react-router-dom";

import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ItemDetail(props) {
  const [cantidad,setCantidad] = useState(0);

  const navig = useHistory();

  function onAdd(countValue){
    setCantidad(countValue);
    alert(`Agregaste ${countValue} items al carrito.`);
  }

  return (
    <section class="relative text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 class="text-sm uppercase title-font text-gray-500 tracking-widest">
              {props.category}
            </h2>
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">
              {props.title}
            </h1>
            <div class="flex mb-4">
              <a class="flex-grow text-red-500 border-b-2 border-red-500 py-2 text-lg px-1">
                Descripción
              </a>
            </div>
            <p class="leading-relaxed mb-4">{props.description}</p>
            <div class="flex border-t border-gray-200 py-2">
              <span class="text-gray-500">Color</span>
              <span class="ml-auto text-gray-900">Blue</span>
            </div>
            <div class="flex border-t border-gray-200 py-2">
              <span class="text-gray-500">Size</span>
              <span class="ml-auto text-gray-900">Medium</span>
            </div>
            <div class="flex border-t border-b mb-6 border-gray-200 py-2">
              <span class="text-gray-500">Quantity</span>
              <span class="ml-auto text-gray-900">{props.stock}</span>
            </div>
            <div class="flex">
              <span class="title-font font-bold text-2xl text-red-600">
                ${props.price}
              </span>
              {/* <button class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Comprar</button> */}
            </div>
            {cantidad === 0?
              <ItemCount 
                stock={props.stock} 
                initial={1} 
                onAdd={onAdd}
              />
            : 
            <button 
                className="flex mx-auto mt-2 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
                Finalizar compra
            </button>
            }
          </div>
          <img
            alt={props.title}
            class="lg:w-1/2 w-full lg:h-auto h-32 object-scale-down object-center rounded"
            src={props.imgUrl}
          />
        </div>
        <button
          onClick={() => navig.go(-1)}
          className="flex-shrink-0 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg mt-10 sm:mt-0"
        >
          Volver
        </button>
      </div>

      <div className="absolute left-0 top-1/2">
        <Link to={`/products/${props.id - 1}`}>
           <button disabled={props.id === 1} className="w-2/4 text-grey-400">
            <FontAwesomeIcon icon={faArrowCircleLeft} />
          </button>
        </Link>
      </div>
      <Link to={`/products/${props.id + 1}`}>
        <div className="absolute right-0 top-1/2">
          <button className="w-2/4 text-grey-400">
              <FontAwesomeIcon icon={faArrowCircleRight} />
          </button>
        </div>
      </Link>
    </section>
  );
}
