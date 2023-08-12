import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    text :'',
    color: ''
}

export const AlertSlice =createSlice({
    name : 'alert',
    initialState,
    reducers : {
        setAlert : (state,action) => {
            console.log(action);
            state.text =action.payload.text
            state.color =action.payload.color
        },
        resetAlert : (state,action) => {
            state.text =''
            state.color =''
        }
    }
    
})

export const {setAlert,resetAlert} =AlertSlice.actions
export default AlertSlice.reducer