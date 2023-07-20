import { combineReducers } from "redux";
import { counterReduc } from "./counter.reducer";
import { doctorReducer } from "./doctor.reducer";


export const rootreducer =combineReducers({
    counter:counterReduc,
    doctors:doctorReducer
})