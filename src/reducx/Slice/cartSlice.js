import { createSlice } from "@reduxjs/toolkit"


const initstate = {
    Itmes: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState:initstate,
    reducers:{
        Addcart: (state ,action) => {
            console.log(action);
            let itme = state.Itmes.some((v) => v.pid === action.payload.pid)
            // console.log(itme);
            if (itme) {
                let index = state.Itmes.findIndex((v) => v.pid === action.payload.pid)
                state.Itmes[index].Qty++
            } else {
                state.Itmes.push(action.payload)
            }
           
            state.Itmes= state.Itmes
        },
        incrementQty: (state ,action) => {
            let index = state.Itmes.findIndex((c) => c.pid === action.payload)
            state.Itmes[index].Qty++

            state.Itmes= state.Itmes
        },
        decrementQty: (state ,action) => {
            let delete_index = state.Itmes.findIndex((m) => m.pid === action.payload)
            console.log(delete_index);
            if(state.Itmes[delete_index].Qty > 1){
             state.Itmes[delete_index].Qty--;
            }

            state.Itmes= state.Itmes
        },
        QTyRemovecart: (state ,action) => {
            state.Itmes=state.Itmes.filter((v) => v.pid !== action.payload)

            state.Itmes= state.Itmes
        },
    }
})

export const {Addcart ,incrementQty,decrementQty,QTyRemovecart} =cartSlice.actions
export default cartSlice.reducer