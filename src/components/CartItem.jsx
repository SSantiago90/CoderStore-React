import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";


const CartItem = (props) => {
  const totalPrice = (props.quantity * props.price).toFixed(2);
  return (
    <tr className="bg-white border-4 border-gray-200">
      <td className="px-6 py-2 flex flex-row items-center">
        <img
          className="h-8 w-8 object-cover "
          src={props.imgUrl}
          alt={props.title}
        />
      </td>
      <td>
        <span className="text-center ml-2 font-semibold">{props.title}</span>
      </td>
      <td className="px-8 py-2">
        <span>{`$ ${props.price}`}</span>
      </td>
      <td className="px-6 py-2">
        <span>{props.quantity}</span>
      </td>
      <td className="px-4 py-2 text-indigo-600 font-bold">
        <span>{`$ ${totalPrice}`}</span>
      </td>
      <td className="px-4 py-2 text-center">
        <div className="inline-block text-center text-grey-600 px-2 hover:text-green-500">
          <Link to={`/products/${props.id}`}>
            <FontAwesomeIcon icon={faClipboardList} />
          </Link>
        </div>
        <div className="inline-block text-center text-grey-600 px-2 hover:text-red-500">
          <button onClick={ ()=>{props.onDelete(props.id)}}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default CartItem;
