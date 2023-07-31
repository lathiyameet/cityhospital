import * as ActionType from '../Actiontype'

const initstate = {
    Favorite:[],
    loading: false,
    error: null,
}

export const likeReducerdata = (state = initstate, action) => {
    console.log(action);
    switch(action.type){
        case ActionType.FAVORITE_MEDICINES:
            return{
                    ...state,
                Favorite:action.payload,
            }
            default : 
            return state
    }
}