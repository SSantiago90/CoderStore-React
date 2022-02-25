import store from '../store';
import * as actions from './cartActionTypes';

// DISPATCHERS
export function clearCart(description){
    store.dispatch({    
        type: actions.CLEAR_CART,
        payload: {
            description: description
        }
    });
}

// HELPERS
export function itemsInCart(){
    return store.getState().reduce((acc, item) => {
        acc.push(item.qty);
        return acc;
    }, []);
}