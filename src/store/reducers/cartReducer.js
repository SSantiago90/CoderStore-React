import * as actions from '../actions/cartActionTypes';

function cartReducer(state = [{id: 1, title: "hola", qty: 5}],action){
    switch(action.type){
        case actions.GET_CART:
            return [...state];
        case actions.ADD_TO_CART:
            return [
                ...state,
                {
                    description: action.payload.description,
                    itemId: action.payload.id,
                }
            ];
        case actions.ITEMS_IN_CART:
            return [state.reduce((acc, item) => {
                acc.push(item.qty);
                return acc;
            }, [])];
        case actions.CLEAR_CART:
            return [];
        default:
            return state;
    }
}

export default cartReducer;