import { createStore } from "redux";
import cartReducer from "./reducers/cartReducer";
import * as actions from './actions/cartActionTypes';

const store = createStore(
    cartReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const storeActions = {...actions}

// DISPATCHERS / ACTION CREATORS ?
export function clearCart(description = "reset cart"){
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

export default store;