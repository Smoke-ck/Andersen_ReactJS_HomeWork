import { loginUser } from "../../api/loginAPi";

export const ACTION_LOGIN_USER = 'ACTION_LOGIN_USER';
export const fetchLogin = (user) => (dispatch) => {

    loginUser(user).then(data =>
        dispatch({
            type: ACTION_LOGIN_USER,
            payload: data,
        })
    );
};