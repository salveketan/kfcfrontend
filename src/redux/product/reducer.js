import * as types from "./actionType";

const initialState = {
    product: [],
    cart: [],
    error: "",
    loading: false

}

const productReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.FETCH_DATA_REQUEST: {
            return {
                ...state,
                loading: true,
                error: ""
            }
        }
        case types.FETCH_DATA_SUCCESS: {
            return {
                ...state,
                loading: false,
                product: payload
            }
        }
        case types.FETCH_DATA_FAILURE: {
            return {
                ...state,
                loading: false,
                error: payload
            }
        }
        
        //===========================cart===========================
        case types.CART_DATA_REQUEST: {
            return state
            // loading: true,
            // error: ""

        }
        case types.CART_DATA_SUCCESS: {
            return state


            // loading: false,
            // cart: payload

        }
        case types.CART_DATA_FAILURE: {
            return state
            // loading: false,
            // error: payload

        }
        //===============================
        case types.CART_DATA_GET_REQUEST: {
            return {
                ...state,
                loading: true,
                error: ""
            }
        }
        case types.CART_DATA_GET_SUCCESS: {
            return {
                ...state,
                loading: false,
                cart: payload
            }
        }
        case types.CART_DATA_GET_FAILURE: {
            return {
                ...state,
                loading: false,
                error: payload
            }
        }
        default:
            return state;
    }
}

export default productReducer;