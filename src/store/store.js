import { createStore } from "redux";
import cartReducer from "./reducers/cartReducer";
import * as actions from './actions/cartActionTypes';

const store = createStore(cartReducer);
export const storeActions = {...actions}

export default store;