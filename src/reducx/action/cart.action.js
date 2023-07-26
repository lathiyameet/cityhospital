import * as ActionType from '../Actiontype'

export const cartdata = (id) => (Dispatch) => {
    Dispatch({type:ActionType.ADD_TO_CART , payload:{pid:id , Qty:1}})
}  

export const cartQTyADD = (id) => (Dispatch) => {
    Dispatch({type:ActionType.INC_CART , payload:id})
} 
export const cartQTyDelete = (id) => (Dispatch) => {
    Dispatch({type:ActionType.DEC_CART , payload:id})
} 

export const cartQTyRemove = (id) => (Dispatch) => {
    Dispatch({type:ActionType.REMOVE_CART , payload:id})
}   