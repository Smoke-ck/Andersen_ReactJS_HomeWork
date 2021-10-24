import { ACTION_SET__PRODUCT } from "../actions/shopProducts";

const initialState = {
  product: {},
};

const productByIDReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_SET__PRODUCT: {
      console.log(state)
      return { product: payload }
    }

    default:
      return state;
  }
}

export default productByIDReducer;