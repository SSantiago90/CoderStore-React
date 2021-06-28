import React, {useState, useEffect} from "react";
import ItemCount from "./ItemCount";

export default function ItemDetail(props) {

  return (
    <section class="text-gray-600 body-font overflow-hidden">
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
          <h2 class="text-sm uppercase title-font text-gray-500 tracking-widest">{props.category}</h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">{props.title}</h1>
          <div class="flex mb-4">
            <a class="flex-grow text-red-500 border-b-2 border-red-500 py-2 text-lg px-1">Descripción</a>         
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
            <span class="title-font font-bold text-2xl text-red-600">${props.price}</span>
            {/* <button class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Comprar</button> */}            
          </div>
            <ItemCount stock={props.stock} initial={1}/>
        </div>
        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={props.imgUrl}/>
      </div>
    </div>
  </section>
  );
}