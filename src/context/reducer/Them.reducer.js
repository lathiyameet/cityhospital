import { TOGGLE_THEM } from "../ActionType";

export const ThemReducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_THEM:
        return{
            them :action.payload
        }   
       
        
        default:
            return state
    }
}