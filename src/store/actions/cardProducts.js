import { getCarts,addProductInCart,updateProductInCart,deleteProductInCart} from "../../api/cartsApi";


export const ACTION_SET_CARTS = 'ACTION_SET_CARTS';
export const fetchCarts = () => (dispatch) => {

    getCarts().then(data =>
        dispatch({
            type: ACTION_SET_CARTS,
            payload: data,
        })
    );
};


export const ACTION_SET_NEWCART = 'ACTION_SET_NEWCART';
export const fetchNewCart = (cartData) => (dispatch) => {

    addProductInCart(cartData).then(data =>
        dispatch({
            type: ACTION_SET_NEWCART,
            payload: data,
        })
    );
};

export const ACTION_UPDATE_CART = 'ACTION_UPDATE_CART';
export const fetchUpdateCart = (cartData) => (dispatch) => {

    updateProductInCart(cartData).then(data =>
        dispatch({
            type: ACTION_UPDATE_CART,
            payload: data,
        })
    );
};

export const ACTION_DELETE_CART = 'ACTION_DELETE_CART';
export const fetchDeleteCart = (id) => (dispatch) => {

    deleteProductInCart(id).then(data =>
        dispatch({
            type: ACTION_DELETE_CART,
            payload: data,
        })
    );
};
