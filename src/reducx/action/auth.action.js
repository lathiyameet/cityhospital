
import * as ActionType from '../Actiontype'

export const signupReqest= (data) => (Dispatch) => {
    Dispatch({type:ActionType.SIGNUP_REQEST , payload:data})
}  

export const LoginReqest= (data) => (Dispatch) => {
    Dispatch({type:ActionType.LOGIN_REQEST , payload:data})
}  
export const ForgetReqest= (data) => (Dispatch) => {
    Dispatch({type:ActionType.FORGET_REQEST , payload:data})
} 
