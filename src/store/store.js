import { createStore } from "redux";
import cartReducer from "./reducers/cartReducer";
import * as actions from './actions/cartActionTypes';

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
            item : {...item}
        }
    });
}

export function removeFromCart(id){
    store.dispatch({    
        type: actions.REMOVE_FROM_CART,
        payload: {
            "id" : id
        }
    });
}

// HELPERS

export function getCart(){
    return store.getState();
}

export function itemsInCart(id){
    if(id) {        
        return getItemInCart(id) && getItemInCart(id).quantity;
    }
    else
    {
        return store.getState().reduce((acc = 0, item) => {
            acc += item.quantity;
            return Number(acc);
        }, []);
    }
}

export function isInCart(id){
    return store.getState().some( item => {
        return item.id === id;
    });
}

export function getItemInCart(id){
    return store.getState().find( item => {
        return item.id === id;
    });
}


export function getTotalPrice(){
    let total = 0;
    store.getState().forEach( item => {
        total += item.price * item.quantity;
    })
    return total;
}

export const storeActions = {...actions}

export default store;