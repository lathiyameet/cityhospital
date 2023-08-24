import * as ActionType from '../Actiontype'

export const Favorite_medicines = (id) => (Dispatch) => {
    
    Dispatch({type:ActionType.FAVORITE_MEDICINES , payload:{pid:id}})
}

export const Favorite_medicinesRemove = (id) => (Dispatch) => {
    Dispatch({type:ActionType.FAVORITE_MEDICINES_REMOVE , payload:id})
}  
   