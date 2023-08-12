
import * as ActionType from '../Actiontype'

export const signupReqest= (data) => (Dispatch) => {
    Dispatch({type:ActionType.SIGNUP_REQEST , payload:data})
}  

export const emailVerification= () => (Dispatch) => {
    Dispatch({type:ActionType.EMAIL_VERIFICATION })
}  

export const LoginReqest= (data) => (Dispatch) => {
    Dispatch({type:ActionType.LOGIN_REQEST , payload:data})
}  
export const loggdeIn= (data) => (Dispatch) => {
    Dispatch({type:ActionType.LOGGDE_IN , payload:data})
} 
export const ForgetReqest= (data) => (Dispatch) => {
    Dispatch({type:ActionType.FORGET_REQEST , payload:data})
} 

export const authError= (data) => (Dispatch) => {
    Dispatch({type:ActionType.AUTH_ERROR , payload:data})
} 

export const Logged_out= () => (Dispatch) => {
    Dispatch({type:ActionType.LOGGED_OUt})
} 


export const LogoutReqest= () => (Dispatch) => {
    Dispatch({type:ActionType.LOG_OUt})
} 