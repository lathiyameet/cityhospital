import * as ActionType from '../Actiontype'

export const increment = () => (despatch) => {
    despatch({type : ActionType.COUNTER_INCREMENT})
}

export const decrement = () => (despatch) => {
    despatch({type : ActionType.COUNTER_DECREMENT})
}