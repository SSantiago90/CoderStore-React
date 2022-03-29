import * as actions from '../actions/cartActionTypes';
import produce from "immer"

function cartReducer(state = [], action) {
    switch (action.type) {
        case actions.ADD_TO_CART:
            return [...state, action.payload.item];
        case actions.REMOVE_FROM_CART:
            const filter = produce(state, draft => {
                return draft.filter( item => {
                    console.log("filter", item.id, action.payload.id);
                    return (item.id !== action.payload.id)
                });               
            });
            console.log(filter);
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
