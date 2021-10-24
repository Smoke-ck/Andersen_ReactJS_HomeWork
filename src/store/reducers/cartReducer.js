import { ACTION_SET_CARTS,ACTION_SET_NEWCART,ACTION_UPDATE_CART,ACTION_DELETE_CART} from "../actions/cardProducts";


const initialState = {
    carts: []
};
export default function cartReducer(state = initialState, { type, payload }) {

    switch (type) {

        case ACTION_SET_CARTS: {
            console.log(payload[0].products)
            return { carts: payload[0].products };
        };
        case ACTION_SET_NEWCART: {
        
            return {
                ...state,
                carts: [...state.carts, payload]
            }
        };
        case ACTION_UPDATE_CART: {
            return {
                ...state,
                carts : state.carts.map((item) => item.id !== payload.products.id 
                ? item 
                : {...item,quantity:payload.products.quantity})
               
            }
        };
        case ACTION_DELETE_CART: {
            console.log(state)
            return {
                ...state,
                carts: state.carts.filter((item) => item.id !== payload.products.id)
            }
        };
        default:
            return state
    }
}