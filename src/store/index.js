import { createStore,applyMiddleware,combineReducers} from "redux";
import allProductsReducer from "./reducers/allProducts";
import productByIDReducer from "./reducers/productsById";
import cartReducer from "./reducers/cartReducer"
import loginReducer from "./reducers/loginReducer";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    
    products: allProductsReducer,
    product: productByIDReducer,
    carts: cartReducer,
    login: loginReducer,
    
});
export default createStore(rootReducer, applyMiddleware(thunk));

