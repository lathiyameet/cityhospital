import * as ActionType from '../Actiontype'

const initstate = {
    medicine: [],
    loading: false,
    error: null
  
  }

  export const medicinesReducer = (state = initstate, action) => {

switch(action.type){
  
  
      case ActionType.GET_MEDICINES:
        return {
          ...state,
          medicine: action.payload,
        
        }
  
      case ActionType.ADD_MEDICINES:
        return {
          ...state,
          medicine: state.medicine.concat(action.payload)
        }
  
      case ActionType.DELETE_MEDICINES:
        return {
          ...state,
          medicine: state.medicine.filter((v) => v.id !== action.payload)
        }
      case ActionType.UPDTE_MEDICINES:
        return {
          ...state,
          medicine: state.medicine.map((v) => {
            if (v.id === action.payload.id) {
              return action.payload;
            } else {
              return v;
            }
          })
        }
      default:
        return state
}


  }