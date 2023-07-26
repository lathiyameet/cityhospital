import { combineReducers } from "redux";
import { counterReduc } from "./counter.reducer";
import { doctorReducer } from "./doctor.reducer";
import { medicinesReducer } from "./Medicines.reducer";
import { cartReducer } from "./cart.reducer";


export const rootreducer =combineReducers({
    counter:counterReduc,
    doctors:doctorReducer,
    mediciness:medicinesReducer,
    cart:cartReducer
})