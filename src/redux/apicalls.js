import { axioss } from "../axios";
import { loginFailure, loginStart, loginSuccesst } from "./userRedux"

export const login = async (dispatch , user) => {
    dispatch(loginStart());
    try {
        const res = await axioss.post('/user/login', user);
        dispatch(loginSuccesst(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}