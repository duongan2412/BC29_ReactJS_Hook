import { USER_INFO_KEY } from "../../constants/common";
import { SET_USERINFO } from "../type/user.type"

let userInfo = localStorage.getItem(USER_INFO_KEY);

if (userInfo) {
    userInfo = JSON.parse(userInfo);
}

const initialState = {
    userInfo,
}

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case SET_USERINFO:
            state.userInfo = payload

            return { ...state }

        default:
            return state
    }
}
