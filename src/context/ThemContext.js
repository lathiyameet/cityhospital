import { createContext, useReducer } from "react";
import { ThemReducer } from "./reducer/Them.reducer";
import { TOGGLE_THEM } from "./ActionType";

export const ThemContext = createContext();

const initstate = {
    them : 'light'
}
export const  Themprovider = ({children}) => {
    const [state,dispatch] = useReducer(ThemReducer ,initstate);

    const tooglethem = (Them) => {
        const newthem = Them === 'light' ? 'dark' : 'light'

        dispatch({type:TOGGLE_THEM ,payload:newthem})
    }
    return (
        <ThemContext.Provider
        value={{
            ...state,
            tooglethem
        }}       
        >
            {children}
        </ThemContext.Provider> 
    )
   
}