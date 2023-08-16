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
            let Favorite = state.Favorite.some((v) => v.pid === action.payload.pid)

            if (Favorite) {
                let index = state.Favorite.findIndex((v) => v.pid === action.payload.pid)
                state.Favorite[index].Qty++
            } else {
                state.Favorite.push(action.payload)
            }
            
            return {
                Favorite: state.Favorite,
                loading: false,
                error: null
            };
            case ActionType.FAVORITE_MEDICINES_REMOVE:
                return {
                    ...state,
                    Favorite: state.Favorite.filter((v) => v.pid !== action.payload)
                  }
           
            default : 
            return state
    }
}