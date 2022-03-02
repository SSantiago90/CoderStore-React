import React from "react";
import { Link } from "react-router-dom";
import OnImagesLoaded from "react-on-images-loaded";

import ItemCount from "./ItemCount";
import NavigationArrows from "./NavigationArrows";
import ImageLoader from "./loaders/ImgLoader";
import "./styles/loaders.css";
import { itemsInCart } from "../store/store";


export default function ItemDetail(props) {

  const [imgLoaded, setImgLoaded] = React.useState(false);

  function onAdd(countValue) {
    props.onAdd( {...props, quantity: countValue});
  }

  return (
    <section className="relative text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:h-auto h-32 object-scale-down object-center rounded self-center">
            <OnImagesLoaded onLoaded={() => setImgLoaded(true)}>
              <div className={imgLoaded ? "hidden-false" : "hidden-true"}>
                <img alt={props.title} className="image" src={props.imgUrl} />
              </div>
              {!imgLoaded && <ImageLoader />}
            </OnImagesLoaded>
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm uppercase title-font text-gray-500 tracking-widest">
              {props.category}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              {props.title}
            </h1>
            <div className="flex mb-4">
              <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
                Descripción
              </a>
            </div>
            <p className="leading-relaxed mb-4">{props.description}</p>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Color</span>
              <span className="ml-auto text-gray-900">Blue</span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Size</span>
              <span className="ml-auto text-gray-900">Medium</span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">Quantity</span>
              <span className="ml-auto text-gray-900">{props.stock}</span>
            </div>
            <div className="flex">
              <span className="title-font font-bold text-2xl text-indigo-600">
                ${props.price}
              </span>
            </div>
            {! itemsInCart(props.id)? (
              <ItemCount stock={props.stock} initial={1} onAdd={onAdd} />
            ) : (
              <div>
                <button className="flex mx-auto mt-2 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                  <Link to="/cart">Finalizar compra</Link>
                </button>
                <div className="text-center mt-2 leading-none flex-wrap justify-centerw-full py-2">
                  <span className="w-full block py-1 px-2 rounded bg-green-50 text-green-500 text-xs font-medium tracking-widest">
                    Ya cargaste {itemsInCart(props.id)} en el carrito
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
        <Link type="button" className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0" to="/">
          Volver
        </Link>
      </div>
     <NavigationArrows goNext={props.goNext} from={props.index} />
    </section>
  );
}
