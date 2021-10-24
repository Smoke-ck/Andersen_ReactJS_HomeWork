import { getProducts,getProduct,updateProduct} from "../../api/api";

export const ACTION_SET_PRODUCTS = 'ACTION_SET_PRODUCTS';
export const fetchProducts = () => (dispatch) => {
   return getProducts().then(data =>
        dispatch({
            type: ACTION_SET_PRODUCTS,
            payload: data,
        })
    );
};


export const ACTION_SET__PRODUCT = "ACTION_SET__PRODUCT"
export const fetchProduct = (id) => dispatch => {

    return getProduct(id)
      .then(product => {
        dispatch({
          type: ACTION_SET__PRODUCT,
          payload: product,
        });
      })
  };
  

export const ACTION_UPDATE__PRODUCT = "ACTION_UPDATE__PRODUCT"
export const updateFetchProduct = (product) => dispatch => {
 
  return updateProduct(product)
  .then(product => {
    dispatch({
      type: ACTION_UPDATE__PRODUCT,
      payload: product,
    });
  })
}
