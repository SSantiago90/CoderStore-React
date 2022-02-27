import * as actions from './cartActionTypes';

export function clearCart(description){
    return {
        type: actions.ADD_TO_CART,
        payload: {
            description: description
        }
    }

}