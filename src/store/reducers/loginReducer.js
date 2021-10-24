import {ACTION_LOGIN_USER} from "../actions/loginUser";


const initialState = {
    token: ""
};
export default function loginReducer (state = initialState, { type, payload }) {

    switch (type) {

        case ACTION_LOGIN_USER: {
            return { token: payload.token};
        };
       
        default:
            return state
    }
}