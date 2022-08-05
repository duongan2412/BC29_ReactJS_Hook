import { SET_USERINFO } from "../type/user.type"

const setUserInfoAction = (data) => {
    return {
        type: SET_USERINFO,
        payload: data
    }
}

export { setUserInfoAction };