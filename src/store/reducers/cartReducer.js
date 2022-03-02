import * as actions from '../actions/cartActionTypes';
import produce from "immer"

function cartReducer(state = [{ id: "SKaEvOEMA92fpFoW7dXQ", title: "hola", qty: 5 }], action) {
    switch (action.type) {
        case actions.ADD_TO_CART:
            return [...state, action.payload.item];
        case actions.REMOVE_FROM_CART:
            const filter =  produce(state, draft => {
                draft.filter( item => item.id !== action.payload.id);
            });
            return filter;
        case actions.CLEAR_CART:
            return [];            
        case actions.GET_CART:
            return state;
        default:
            return state;
    }
}

export default cartReducer;
