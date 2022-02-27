import * as actions from '../actions/cartActionTypes';
import produce from "immer"

function cartReducer(state = [{ id: 1, title: "hola", qty: 5 }], action) {
    switch (action.type) {
        case actions.ADD_TO_CART:
            // we use immer to avoid mutating the state
            return produce(state, draft => {
                draft.push(action.payload);
            });
     /*    case actions.ADD_TO_CART:
            return [
                ...state,
                {
                    description: action.payload.description,
                    itemId: action.payload.id,
                }
            ]; */
        case actions.CLEAR_CART:
            return [];
        case actions.GET_CART:
            return state;
        default:
            return state;
    }
}

export default cartReducer;

/*  Do we need this?
    case actions.ITEMS_IN_CART:
        [state.reduce((acc, item) => {
        acc.push(item.qty);
        return acc;
    }, [])]; 
*/