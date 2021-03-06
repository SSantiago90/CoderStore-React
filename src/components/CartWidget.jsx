import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import  {clearCart, itemsInCart} from "../store/store"; 
import {useSelector} from "react-redux";

const CartWidget = () => {
  const state = useSelector(state => state);
  let count = itemsInCart();
  
  return (
    <div className="dropdown inline-block relative">
      <Link to="/cart">
        <FontAwesomeIcon icon={faShoppingCart} />
      </Link>
      {count > 0 && (
        <div className="w-10 ml-2 h-8 inline-flex items-center justify-center rounded-full bg-indigo-500 text-indigo-100 mb-1">
          <p>{count}</p>
        </div>
      )}
      {count > 0 && (
        <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
          <li>
            <button
              onClick={clearCart}
              className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
            >
              Vaciar carrito
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default CartWidget;
