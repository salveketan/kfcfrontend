import axios from "axios";
import * as types from "./actionType";
let userData = JSON.parse(localStorage.getItem("KFC-user"));
let id = userData?.user._id;
// console.log(id);


const fetch_data_request = () => {
    return {
        type: types.FETCH_DATA_REQUEST,
        // payload
    }
}
const fetch_data_success = (payload) => {
    // console.log(payload);
    return {
        type: types.FETCH_DATA_SUCCESS,
        payload
    }
}

const fetch_data_failure = (payload) => {
    return {
        type: types.FETCH_DATA_FAILURE,
        payload
    }
}

const fetchProductData = (dispatch) => {

    dispatch(fetch_data_request());
    axios
        // .get("https://kfcbackendketan.herokuapp.com/product")
        .get("http://localhost:5000/product")
        .then((r) =>
            // console.log(r)
            dispatch(fetch_data_success(r.data.product))
        )
        .catch((e) => dispatch(fetch_data_failure(e.data)))

}


//=============================================cart=========================================

const cart_data_request = () => {
    return {
        type: types.CART_DATA_REQUEST,
        // payload
    }
}
const cart_data_success = () => {

    return {
        type: types.CART_DATA_SUCCESS,
        // payload
    }
}
const cart_data_failure = () => {
    return {
        type: types.CART_DATA_FAILURE,
        // payload
    }
}


const postCartData = (dispatch, e) => {

    const { image_url, title, price, desc } = e
    //post
    dispatch(cart_data_request());
    axios({
        method: "POST",
        url: `http://localhost:5000/cart`,
        // url: "https://kfcbackendketan.herokuapp.com/cart",
        data: {
            image_url: image_url,
            title: title,
            price: price,
            desc: desc,
            userId: id
        }
    })
        .then((r) => {
            alert("Item is added to Cart")
            dispatch(cart_data_success(r.data))
        })
        .catch((e) => dispatch(cart_data_failure(e.data)));

}
//===========================get cart========================


const fetch_cart_data_request = () => {
    return {
        type: types.CART_DATA_GET_REQUEST,
        // payload
    }
}
const fetch_cart_data_success = (payload) => {
    // console.log(payload);
    return {
        type: types.CART_DATA_GET_SUCCESS,
        payload
    }
}
const fetch_cart_data_failure = (payload) => {
    return {
        type: types.CART_DATA_GET_FAILURE,
        payload
    }
}


const fetchCartdata = (dispatch) => {
    dispatch(fetch_cart_data_request());

    axios
        .get(`http://localhost:5000/cart/${id}`)
        // .get("https://kfcbackendketan.herokuapp.com/cart")
        .then((r) => {
            // console.log(r.data)
            dispatch(fetch_cart_data_success(r.data))
        })
        .catch((e) => dispatch(fetch_cart_data_failure(e.data)))
}

export { fetchProductData, postCartData, fetchCartdata };