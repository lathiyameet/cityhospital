import * as ActionType from '../Actiontype'

const initstate = {
  doctor: [],
  loading: false,
  error: null

}

export const doctorReducer = (state = initstate, action) => {
  console.log(action);

  switch (action.type) {
    case ActionType.LOADING_DOCTOR:
      return {
        doctor: [],
        loading: action.payload,
        error: null
      }

      case ActionType.ERROR_DOCTOR:
        return{
          doctor: [],
        loading: false,
        error: action.payload
        }

    case ActionType.GET_DOCTOR:
      return {
        ...state,
        doctor: action.payload,
        loading: false
      }

    case ActionType.ADD_DOCTOR:
      return {
        ...state,
        doctor: state.doctor.concat(action.payload)
      }

    case ActionType.DELETE_DOCTOR:
      return {
        ...state,
        doctor: state.doctor.filter((v) => v.id !== action.payload)
      }
    case ActionType.UPDTE_DOCTOR:
      return {
        ...state,
        doctor: state.doctor.map((v) => {
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