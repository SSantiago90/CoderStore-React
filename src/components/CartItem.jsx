import React from 'react';
import {Link} from 'react-router-dom'

const CartItem = (props) => {
    return (
        
        <tr class="bg-white border-4 border-gray-200">
        <td class="px-16 py-2 flex flex-row items-center">
        <img
            class="h-8 w-8 object-cover "
            src={props.imgUrl}
            alt={props.title}
        />
        </td>
        <td>
        <span class="text-center ml-2 font-semibold">{props.title}</span>
        </td>
        <td class="px-16 py-2">
        <button class="bg-red-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-red-600 hover:text-red-600 ">
           <Link to={`/products/${props.id}`}>Ver Producto</Link>
        </button>
        </td>
        <td class="px-16 py-2">
        <span>$ {props.price}</span>
        </td>
        <td class="px-16 py-2">
        <span>{props.quantity}</span>
        </td>
        <td class="px-16 py-2 text-red-600 font-bold">
        <span>$ {props.quantity * props.price}</span>
        </td>                            
    </tr>     
    );
}

export default CartItem;
