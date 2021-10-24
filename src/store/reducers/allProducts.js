import { ACTION_SET_PRODUCTS,ACTION_UPDATE__PRODUCT} from "../actions/shopProducts";

const initialState = {
    products: []
};
export default function allProducts(state = initialState, { type, payload }) {

    switch (type) {
        
        case ACTION_SET_PRODUCTS: {
            
            return { products: payload };
        }; 
        case ACTION_UPDATE__PRODUCT: {
            return { 
               ...state,
                products: state.products.map((item) => item.id !== +payload.id ? item:{...item,
                title: payload.title,
                price: payload.price,
                description: payload.description})
              }
        }
        default:
            return state
    }
}