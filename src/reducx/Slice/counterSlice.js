const { createSlice } = require("@reduxjs/toolkit")

const initState ={
    count:0
}

export const counterslice =createSlice({
    name:'counter',
    initialState:initState,
    reducers:{
        increment: (state ,action) => {
            state.count +=1;
        },
        decrement:(state ,action) => {
            if(state.count > 0){
                state.count -= 1 ;
            }
           
        }
    }
})

export const {increment ,decrement} =counterslice.actions
export default counterslice.reducer