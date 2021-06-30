import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import useCartContext from "../context/CartContext";

const CartWidget = () => {

    const {itemsInCart} = useCartContext();

    return (   
        <div>
            <FontAwesomeIcon icon={faShoppingCart} />
            {itemsInCart > 0?
                <div class="w-10 ml-2 h-8 inline-flex items-center justify-center rounded-full bg-red-500 text-red-100 mb-1">
                    <p>{itemsInCart}</p>
                </div>       
            : <span className="hidden">Cart Placeholder</span>
            }
        </div>
    );
}

export default CartWidget;
