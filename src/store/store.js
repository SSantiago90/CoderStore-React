import { createStore } from "redux";
import cartReducer from "./reducers/cartReducer";
import * as actions from './actions/cartActionTypes';
import { getAllItems } from '../firebase';

const store = createStore(
    cartReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// DISPATCHERS / ACTION CREATORS ?
export function clearCart(){
    store.dispatch({    
        type: actions.CLEAR_CART,      
    });
}

export function addToCart(item){
    store.dispatch({    
        type: actions.ADD_TO_CART,
        payload: {
            item : item
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

export const storeActions = {...actions}

export default store;