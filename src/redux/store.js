import { legacy_createStore, combineReducers } from "redux";
// import thunk from "redux-thunk"
import productReducer from "./product/reducer"

const rootReducer = combineReducers({
    productData: productReducer
})


export const store = legacy_createStore(
    rootReducer,
);

