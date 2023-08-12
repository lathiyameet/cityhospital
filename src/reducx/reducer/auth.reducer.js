import * as ActionType from '../Actiontype'

const initstate = {
    user: null,
    isLoading: false,
    error: null
}

export const authReduc = (state = initstate, action) => {
    console.log(action);
    switch (action.type) {
        case ActionType.SIGNUP_REQEST:
        case ActionType.LOGIN_REQEST:
        case ActionType.LOG_OUt:
            return {
                user: null,
                isLoading: true,
                error: null
            }
        case ActionType.EMAIL_VERIFICATION:
            return {
                user: null,
                isLoading: false,
                error: null
            }
        case ActionType.LOGGDE_IN:
            return {
                user: action.payload,
                isLoading: false,
                error: null
            }
        case ActionType.AUTH_ERROR:
            return {
                user:null ,
                isLoading: false,
                error: action.payload
            }
        case ActionType.LOGGED_OUt:
            return {
                user: null,
                isLoading: false,
                error: null
            }
        default:
            return state
    }
}