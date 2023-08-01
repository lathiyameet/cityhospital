import { combineReducers } from "redux";
// import { counterReduc } from "./counter.reducer";
import { doctorReducer } from "./doctor.reducer";
import { medicinesReducer } from "./Medicines.reducer";
// import { cartReducer } from "./cart.reducer";
import { likeReducerdata } from "./favorite.reducer";
import counterReduc from "../Slice/counterSlice";
import cartReducer from "../Slice/cartSlice";





export const rootreducer =combineReducers({
    counter:counterReduc,
    doctors:doctorReducer,
    mediciness:medicinesReducer,
    datalike:likeReducerdata,
    cart:cartReducer,
    // like:likeReducerdata
  
})