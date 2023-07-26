
import * as ActionType from '../Actiontype'

const initstate = {
    Itmes: [],
    loading: false,
    error: null

}

export const cartReducer = (state = initstate, action) => {
    console.log(action);
    switch (action.type) {
        case ActionType.ADD_TO_CART:
            let itme = state.Itmes.some((v) => v.pid === action.payload.pid)

            if (itme) {
                let index = state.Itmes.findIndex((v) => v.pid === action.payload.pid)
                state.Itmes[index].Qty++
            } else {
                state.Itmes.push(action.payload)
            }
            console.log(state);
            console.log(itme);
            return {
                Itmes: state.Itmes,
                loading: false,
                error: null
            };

        case ActionType.INC_CART:
            let index = state.Itmes.findIndex((c) => c.pid === action.payload)
            state.Itmes[index].Qty++
            return {
                Itmes: state.Itmes,
                loading: false,
                error: null
            };

        case ActionType.DEC_CART:
            let delete_index = state.Itmes.findIndex((m) => m.pid === action.payload)
           console.log(delete_index);
           if(state.Itmes[delete_index].Qty > 1){
            state.Itmes[delete_index].Qty--;
           }
           


            // console.log(state.Itmes[index].Qty++);
            return {
                Itmes: state.Itmes,
                loading: false,
                error: null
            };
            case ActionType.REMOVE_CART:
                return {
                    ...state,
                    Itmes: state.Itmes.filter((v) => v.pid !== action.payload)
                  }
        default:
            return state;
    }

}
