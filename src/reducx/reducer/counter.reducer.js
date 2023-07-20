import * as ActionType from '../Actiontype'

const initstate ={
    count:0
}

export const counterReduc = (state = initstate , action) =>{
    // console.log(action);
    switch(action.type){
        case ActionType.COUNTER_INCREMENT:
        return{
            count :state.count+1
        }
        case ActionType.COUNTER_DECREMENT:
            return{
                count :state.count-1
            }
            default:
                return state
    }
}