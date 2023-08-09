import * as ActionType from '../Actiontype'

const initstate ={
    user : null ,
    isLoading:false,
    error:null
}

export const authReduc = (state = initstate , action) =>{
    console.log(action);
    switch(action.type){
        case ActionType.SIGNUP_REQEST:
            return{
                ...state
            }
            default:
                return state
    }
}