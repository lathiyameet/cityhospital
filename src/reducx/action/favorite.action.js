import * as ActionType from '../Actiontype'

export const Favorite_medicines = (id) => (Dispatch) => {
    Dispatch({type:ActionType.FAVORITE_MEDICINES , payload:{pid:id ,Qty:1}})
}